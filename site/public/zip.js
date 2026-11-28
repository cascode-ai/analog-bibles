// Single-question archives store the original bytes for each image.
const crcTable = Uint32Array.from({ length: 256 }, (_, byte) => {
  for (let bit = 0; bit < 8; bit++) byte = (byte >>> 1) ^ (byte & 1 ? 0xedb88320 : 0);
  return byte;
});

export function createZip(entries) {
  const encoder = new TextEncoder();
  const files = [];
  const directory = [];
  let offset = 0;
  let directorySize = 0;

  for (const { name, bytes } of entries) {
    const filename = encoder.encode(name);
    let crc = 0xffffffff;
    for (const byte of bytes) crc = (crc >>> 8) ^ crcTable[(crc ^ byte) & 0xff];

    const local = new DataView(new ArrayBuffer(30));
    local.setUint32(0, 0x04034b50, true); // Local file header
    local.setUint16(4, 20, true); // ZIP version 2.0
    local.setUint16(6, 0x0800, true); // UTF-8 filenames
    local.setUint16(12, 0x21, true); // DOS date 1980-01-01
    local.setUint32(14, crc ^ 0xffffffff, true);
    local.setUint32(18, bytes.length, true);
    local.setUint32(22, bytes.length, true);
    local.setUint16(26, filename.length, true);
    files.push(local.buffer, filename, bytes);

    const central = new DataView(new ArrayBuffer(46));
    central.setUint32(0, 0x02014b50, true); // Central directory header
    central.setUint16(4, 20, true);
    new Uint8Array(central.buffer).set(new Uint8Array(local.buffer, 4, 26), 6);
    central.setUint32(42, offset, true);
    directory.push(central.buffer, filename);
    directorySize += central.byteLength + filename.length;
    offset += local.byteLength + filename.length + bytes.length;
  }

  const end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true); // End of central directory
  end.setUint16(8, entries.length, true);
  end.setUint16(10, entries.length, true);
  end.setUint32(12, directorySize, true);
  end.setUint32(16, offset, true);
  return new Blob([...files, ...directory, end.buffer], { type: "application/zip" });
}
