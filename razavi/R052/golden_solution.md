# Golden Solution - R052

## Reference answer

The worst-case minimum is 5 two-polarity pair checks, or 8 readings if the polarity of each individual reading is chosen adaptively. These counts assume the meter is connected to one pair at a time, with the other pins left unconnected.

- The gate is open to every pin, and the S–D pair is open in both directions. The bulk is the common terminal of the two junction diodes. Conduction with the positive lead on the bulk identifies an NFET. Conduction with the negative lead on the bulk identifies a PFET. The two S/D pins are interchangeable in this test.
- Check pin 1 against pins 2, 3, and 4. With two diodes, pin 1 is the bulk. With one diode, its partner is the bulk, and one further check against the bulk identifies the gate. With no diode, pin 1 is the gate, and up to two checks among the other three pins identify the bulk and polarity.
- After three open checks, at least two pin assignments remain possible, each with either device type. A fourth pair check has at most three outcomes, which cannot distinguish all four possibilities.

## Grading notes

- +2 — Correct junction polarities for both types, type inferred after identifying the bulk as the common diode terminal, S and D indistinguishable, and a justified worst-case count of 5 pair checks or 8 single-polarity readings.
- +1 — Correct physics with a non-minimal or unjustified count, including a slightly larger explicit count.
- 0 — One physical error that does not break the procedure.
- −2 (asserted as fact) — Inferring type from one diode without knowing the bulk, claiming to distinguish S and D, or reversing the diode polarities.
