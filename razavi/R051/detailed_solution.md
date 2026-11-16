# Detailed solution - R051

**Approach.** Work out what a dc ohmmeter sees between each pair of pins of an NMOS transistor: an open circuit or a pn-junction diode. Then design an adaptive sequence of measurements that identifies the gate, the bulk and the two source/drain pins, and show that no sequence can do it with fewer steps in the worst case.

### Step 1 — What the ohmmeter sees between the terminals

- **Gate to anything.** The gate is insulated by the oxide, so it is open to every other pin in both polarities (the gate–channel capacitance blocks dc).
- **Bulk to source, bulk to drain.** The p-type bulk and each n+ region form a **pn junction diode** with the bulk as the anode, so the meter conducts only with "+" on the bulk and "−" on the S/D pin; the reverse polarity reads open.
- **Source to drain.** The two n+ regions form back-to-back diodes (n+ → p bulk → n+), and without gate bias there is no channel, so S–D reads open both ways.

Source and drain are physically identical; which one acts as the source depends only on the circuit voltages. No dc measurement can tell them apart, and none is needed: the goal is to identify the **gate**, the **bulk** and the **pair** of S/D pins.

### Step 2 — Signatures and possibilities

Define a **check** as measuring one pair of pins in both polarities. Its outcome is one of three:

1. open both ways;
2. diode with pin $a$ as anode;
3. diode with pin $b$ as anode.

Outcome 2 or 3 occurs **only** when the pair is {bulk, S/D}, and then the anode is the bulk. Each pin has a distinctive signature:

| Pin | Checks against the other three pins |
|---|---|
| gate | open, open, open |
| bulk | diode (anode), diode (anode), open (to the gate) |
| S/D | diode (cathode, to the bulk), open, open |

There are 4 choices for the gate pin and then 3 for the bulk pin, so **12 possible pin assignments** to distinguish.

### Step 3 — An adaptive procedure that always finishes in 4 checks

Number the pins 1–4 arbitrarily and check pin 1 against the others in turn, stopping as soon as everything is known.

**Case A: pin 1 shows a diode with pin 1 as the anode.** Pin 1 is the bulk and the other pin of that pair is S/D. If an earlier check of pin 1 was open, that partner is the gate (the only pin open to the bulk) and we are done. Otherwise one more check of pin 1 against a third pin settles the rest: a diode means that pin is the other S/D (and the last pin is the gate), open means it is the gate. **Total: 2 checks.**

**Case B: pin 1 shows a diode with the other pin as the anode.** That other pin is the bulk and pin 1 is S/D. Check the bulk against one of the two remaining pins: a diode marks the other S/D, open marks the gate. **Total: 2, 3 or 4 checks**, depending on whether the diode appears in the first, second or third check of pin 1.

**Case C: pin 1 is open to pins 2, 3 and 4 (3 checks).** Pin 1 is the gate, since a bulk or S/D pin would have shown at least one diode. Check pins 2 and 3:

- a diode: its anode is the bulk, its cathode an S/D, and pin 4 is the other S/D;
- open: pins 2 and 3 are the S/D pair (S–D is open), and pin 4 is the bulk.

**Total: 4 checks.**

In every case the assignment is complete after **at most 4 checks**; if pin 1 happens to be the bulk (Case A), 2 checks suffice.

### Step 4 — Why 3 checks are not enough in the worst case

Imagine an adversary who answers "open" whenever that is consistent with some possible assignment. A check of pins $\{a, b\}$ reads open unless the pair is {bulk, S/D}. So after any number of "open" answers, the bulk can only be a pin that has been checked against at most one other pin, and if it was checked once, its partner must be the gate (bulk–gate is the only open pair containing the bulk).

Three checks on three different pairs (repeating a pair adds no information) form one of three patterns on the four pins:

- **a triangle** (e.g. 1–2, 1–3, 2–3): only pin 4 can be the bulk, and the gate can be any of pins 1, 2, 3: **3 assignments remain**;
- **a star** (e.g. 1–2, 1–3, 1–4): pin 1 must be the gate and the bulk can be any of pins 2, 3, 4: **3 remain**;
- **a chain** (e.g. 1–2, 2–3, 3–4): the bulk is an end pin with its neighbour as gate (bulk 1 with gate 2, or bulk 4 with gate 3): **2 remain**.

In every pattern at least two assignments are still possible after three "open" answers, so a fourth check is unavoidable in the worst case. With Step 3, the **minimum worst-case number is 4 checks**.

**If each polarity counts as a separate reading.** A reading then has only two outcomes (conducts or not). Doubling the 4 checks gives 8 readings; choosing each reading adaptively (skipping a reverse reading whenever its result can no longer change the conclusion) saves one, and an exhaustive search over all reading strategies shows that **7 single-polarity readings** are both sufficient and necessary in the worst case. (A pure counting bound gives only 4, since $2^3 = 8 < 12$ assignments; most readings answer "open" and carry little information, which is why the true minimum is higher.)

### Step 5 — Practical remarks

- **Meter polarity.** Know which lead is actually positive in resistance mode (on some analog meters it is the black lead).
- **Gate safety.** Static charge can destroy the gate oxide, so handle the part with grounding. A floating gate that has picked up charge can also create a channel and make S–D appear to conduct; briefly shorting the gate to the other pins before measuring discharges it.
- **Tying pins together.** If pins may be shorted together during a test, one two-polarity test of a pin against the other three tied together classifies it: gate = open both ways; bulk = conducts with the single pin "+"; S/D = conducts with the single pin "−". Three such tests classify all four pins (the last by elimination). Avoid groupings that put the gate on the "+" side with one S/D while the other S/D is on the "−" side: the meter voltage can exceed $V_{TH}$, turn on the channel and give a false reading.

### Result

The gate is open to every pin; the bulk is the **anode** of a diode to each S/D pin (conducts with "+" on the bulk); S–D is open both ways; source and drain cannot (and need not) be distinguished. Procedure: check pin 1 against the others; two diodes with pin 1 as anode make it the bulk, exactly one diode makes the partner the bulk and pin 1 an S/D, no diode makes pin 1 the gate, and one further check among the remaining pins finishes. The minimum is **4 two-polarity checks in the worst case** (equivalently 7 single-polarity readings), and as few as 2 in the best case.

**Common mistake.** Claiming that the source and drain can be identified with an ohmmeter. They are symmetric n+ regions with identical junctions to the bulk; their roles are set by the circuit voltages, not by the device.

**Common mistake.** Reversing the diode polarity. For an NMOS the bulk is p-type and the S/D regions are n+, so the meter conducts with "+" on the bulk and "−" on the S/D pin.

**Common mistake.** Expecting the gate to show a resistance to the channel, or S–D to conduct. The gate is insulated by the oxide, and without a gate voltage above $V_{TH}$ there is no channel between source and drain.
