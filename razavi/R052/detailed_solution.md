# Detailed solution - R052

**Approach.** Work out what a dc ohmmeter sees between the pins of an NFET and of a PFET: open circuits and pn-junction diodes whose direction depends on the device type. The bulk is the pin that forms a diode with *two* other pins, and once it is known, the diode direction gives the type. Then build an adaptive measurement sequence and show that no sequence can be shorter in the worst case.

### Step 1 — What the ohmmeter sees

- **NFET** (n+ S/D in a p-type bulk): each bulk–S/D junction is a diode with the **bulk as the anode**, conducting with "+" on the bulk.
- **PFET** (p+ S/D in an n-well): each junction is a diode with the **bulk as the cathode**, conducting with "−" on the bulk.

In both types the oxide-insulated gate reads open to every pin; source to drain reads open both ways (back-to-back junctions, no channel without gate bias); and source and drain are physically identical, so no dc test can tell them apart, and none is needed.

### Step 2 — Why one diode reading does not reveal the type

Define a **check** as measuring a pair of pins in both polarities. The outcome is open, or a diode with a definite anode and cathode; a diode appears only between the bulk and an S/D pin. If a check finds a diode with pin $a$ as anode and pin $b$ as cathode, two explanations fit:

- an **NFET** whose bulk is $a$ (bulk = anode);
- a **PFET** whose bulk is $b$ (bulk = cathode).

So the direction of a single diode does not give the type until we know which of its two pins is the bulk. The bulk is recognised as the pin **common to two diodes** (it has a diode to each S/D pin), which is why identification needs one more check than for a device of known type.

**Counting the possibilities.** The gate can be any of 4 pins, the bulk any of the remaining 3, and the type either of 2: $4\times3\times2 = 24$ possibilities.

### Step 3 — An adaptive procedure that always finishes in 5 checks

Number the pins 1–4 and check pin 1 against pins 2, 3 and 4.

**Case A: pin 1 forms a diode with two pins.** An S/D pin forms a diode only with the bulk and the gate forms none, so pin 1 must be the **bulk**. If pin 1 is the anode of both diodes the device is an **NFET**; if it is the cathode, a **PFET**. The remaining pin (open to pin 1) is the gate. **Total: 2 or 3 checks.**

**Case B: pin 1 forms a diode with exactly one pin, X (all three checks done).** Pin 1 cannot be the bulk (that would give two diodes) or the gate (no diodes), so pin 1 is an S/D and **X is the bulk**. The direction of the 1–X diode now gives the type: X the anode means NFET, X the cathode means PFET. The two other pins, the gate and the second S/D, are both open to pin 1; check X against one of them: a diode marks the S/D, open marks the gate. **Total: 4 checks.**

**Case C: pin 1 is open to all three pins (3 checks).** Pin 1 is the **gate**, and pins 2, 3, 4 are the bulk and the two S/D, of unknown type. Check pins 2 and 3 (check 4):

- **Diode between 2 and 3.** One of them is the bulk, but the type is not yet known (Step 2). Check pins 2 and 4 (check 5): a diode means pin 2 is common to two diodes, so pin 2 is the bulk; open means pins 2 and 4 are the S/D pair and pin 3 is the bulk. The direction of the bulk's diode then gives the type.
- **Open between 2 and 3.** Pins 2 and 3 are the S/D pair and pin 4 is the bulk. Check pins 4 and 2 (check 5): the diode direction gives the type.

**Total: 5 checks.**

The procedure always finishes within **5 checks**, and in favourable cases in 2.

### Step 4 — Why 4 checks are not enough in the worst case

Let an adversary answer "open" to every check as long as some possibility remains consistent. A check reads open unless the pair is {bulk, S/D}, so after only "open" answers the bulk can have been checked against at most one pin, and that pin must be the gate. Three checks on different pairs (repeating a pair adds no information) form a triangle, a star or a chain on the four pins, which, as for a device of known type, leave 3, 3 and 2 pin assignments: triangle 1–2, 1–3, 2–3 (bulk = 4, gate = 1, 2 or 3), star 1–2, 1–3, 1–4 (gate = 1, bulk = 2, 3 or 4), chain 1–2, 2–3, 3–4 (bulk 1 with gate 2, or bulk 4 with gate 3).

An "open" answer says nothing about the type, so each pin assignment is still possible as an NFET **and** as a PFET: after three checks at least $2\times2 = 4$ possibilities remain. A fourth check has only 3 possible outcomes (open, or a diode in either direction), so it cannot separate 4 possibilities. **At least 5 checks are needed in the worst case**, and Step 3 shows that 5 are enough.

**If each polarity counts as a separate reading** (two outcomes per reading: conducts or not), doubling gives 10 readings. Choosing each reading adaptively saves some, and an exhaustive search over all reading strategies gives a worst case of **8 single-polarity readings**, one more than the 7 needed when the type is known.

### Step 5 — Practical remarks

- **Meter polarity.** Confirm which lead is positive in resistance mode (on some analog meters it is the black lead); a wrong assumption swaps NFET and PFET.
- **Gate charge.** A statically charged gate can create a channel and make S–D appear to conduct; briefly short the gate to the other pins first, and handle the device with grounding to protect the oxide.
- **Tying pins together.** If pins may be shorted during a test, test each pin against the other three tied together, in both polarities. The gate is open both ways; the bulk of an NFET conducts with the single pin "+" and its S/D pins with the single pin "−", with the polarities reversed for a PFET. Since there is one bulk and two S/D pins, the "odd one out" among the three conducting pins is the bulk, and its polarity gives the type. Three such tests settle everything, the fourth pin by elimination.

### Result

The gate is open to all pins; S–D is open; the bulk forms a diode with each S/D pin, as the **anode for an NFET** (conducts with "+" on the bulk) and as the **cathode for a PFET** (conducts with "−" on the bulk). The bulk is identified as the pin common to two diodes, and only then does the diode direction give the type; S and D cannot be distinguished. Procedure: check pin 1 against the others (two diodes: pin 1 is the bulk; one diode: the partner is the bulk; none: pin 1 is the gate), then finish among the remaining pins. The minimum is **5 two-polarity checks in the worst case** (equivalently 8 single-polarity readings), one check more than when the device type is known.

**Common mistake.** Deciding the type from the first diode found ("the anode is the bulk, so it is an NFET"). A diode with anode $a$ and cathode $b$ fits an NFET with bulk $a$ just as well as a PFET with bulk $b$; the bulk must first be identified as the pin common to two diodes.

**Common mistake.** Reversing the diode directions. NFET: p bulk, n+ S/D, bulk is the anode. PFET: n-well bulk, p+ S/D, bulk is the cathode.

**Common mistake.** Claiming that source and drain can be told apart, or that the gate shows a finite resistance. The device is symmetric, and the gate oxide blocks dc current completely.
