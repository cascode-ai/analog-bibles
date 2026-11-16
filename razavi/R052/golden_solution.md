# Golden Solution - R052

## Reference answer

Physics: gate open to all pins; S–D open both ways; the bulk forms a diode with each S/D region. In an NFET the bulk is the anode (p-substrate, n+ S/D): conduction with + on the bulk. In a PFET the bulk is the cathode (n-well, p+ S/D): conduction with − on the bulk. The bulk is the common terminal of the two diode readings, and the diode direction tells the type. S and D remain indistinguishable.

Count (adaptive): worst case 5 two-terminal checks (each pair tested in both polarities), equivalently 8 single-polarity readings; one more check than for a known type. The extra step arises when the first diode is found between two pins neither of which is yet known to be the bulk: the direction alone cannot say whether the anode pin is a p-bulk (NFET) or the cathode pin is an n-bulk (PFET), so another check is needed to find which pin is common to two diodes.

Strategy: check pin 1 against 2, 3, 4. If pin 1 shows diodes to two pins, it is the bulk and the polarity gives the type. If it shows exactly one diode, the partner pin is the bulk (pin 1 cannot be, else two diodes would appear) and the direction gives the type; one more check settles gate vs S/D. If none, pin 1 is the gate; the remaining three need up to two more checks to find the common (bulk) pin and its polarity.

## Grading notes

+2: correct diode polarity for both types (NMOS: + on bulk conducts; PMOS: − on bulk conducts), type inferred from the direction once the bulk is known as the common terminal of two diodes, S and D indistinguishable, and a justified step count (worst case 5 pair checks or 8 readings; a slightly larger explicit count is acceptable at +1). +1: correct physics with a non-minimal or unjustified count. 0: one physical error that does not break the procedure. -2 (asserted as fact): claims the type can be read from a single diode reading without knowing which pin is the bulk, that S and D can be distinguished, or reversed diode polarities.
