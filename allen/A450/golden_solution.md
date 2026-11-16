# Golden Solution - A450

## Reference answer

The switch of capacitor $2^{N-1-i}C$ is controlled by $b_i$:
- top switch (capacitor $C$): $b_{N-1}$ (LSB);
- second switch ($2C$): $b_{N-2}$; …
- bottom switch ($2^{N-1}C$): $b_0$ (MSB).
In each switch the upper contact (tied to the line from the + terminal of $V_{REF}$) is the "bit = 1" position and the lower contact (tied to the ground line) is the "bit = 0" position.

## Grading notes

+2: mapping $2^{N-1-i}C \leftrightarrow b_i$ (MSB on the largest capacitor) and the contact assignment ($V_{REF}$ for 1, ground for 0). +1: correct mapping with the contacts not addressed or slightly confused. 0: mapping stated only for the MSB and LSB without the general rule but correctly. −2 (asserted as fact): MSB assigned to the capacitor $C$ (mapping reversed), or the $V_{REF}$ and ground contacts swapped as the main answer. Describing the reset phase as closing the switch across $C_X$ to discharge the capacitors (with the bit switches at ground) is the normal reset operation, not a false claim.
