# Detailed solution - A331

An output can swing until the transistors between it and a supply rail run out of drain–source voltage. Each saturated transistor in the stack between the output and a rail needs at least $V_{DS}(\mathrm{sat})=V_{ON}$, so the output reaches within $nV_{ON}$ of the rail when $n$ devices are stacked on that side. Count the devices on each side of each output.

### Step 1 — Two-stage Miller op amps, [Fig. 1] and [Fig. 2]

In [Fig. 1] each output has one p-channel device to $V_{DD}$ (M7 at $v_{o1}$, M6 at $v_{o2}$) and one n-channel current source to $V_{SS}$ (M9, M8). Keeping each saturated,

$$
V_o(\max)=V_{DD}-V_{SD7}(\mathrm{sat})=V_{DD}-V_{ON},\qquad
V_o(\min)=V_{SS}+V_{DS9}(\mathrm{sat})=V_{SS}+V_{ON}.
$$

No threshold enters, because the gates are driven by the previous stage, not tied to the output. The push–pull output stages of [Fig. 2] also have a single transistor from each output to each rail (M7/M9 and M14/M8), so the limits are the same. These are the widest output ranges of the five.

### Step 2 — Folded-cascode op amp, [Fig. 3]

Each output sits in a cascode stack: M4 and M6 (M5 and M7) above, M8 and M10 (M9 and M11) below. With both devices of each pair at the edge of saturation,

$$
V_o(\max)=V_{DD}-V_{SD4}(\mathrm{sat})-V_{SD6}(\mathrm{sat})=V_{DD}-2V_{ON},\qquad
V_o(\min)=V_{SS}+2V_{ON}.
$$

### Step 3 — Class B folded-cascode push–pull op amp, [Fig. 4]

Above each output are the folding source and its cascode (M6–M8 and M7–M9); below are the cascode current mirrors M19–M21 and M11–M13, whose output side is also two stacked devices. Hence again

$$
V_o(\max)=V_{DD}-2V_{ON},\qquad V_o(\min)=V_{SS}+2V_{ON}.
$$

### Step 4 — Class AB op amp with cascoded outputs, [Fig. 5]

Each output is driven by a cascoded current source above (M9–M13 and M10–M14) and a cascoded current source below (M11–M15 and M12–M16), so

$$
V_o(\max)=V_{DD}-2V_{ON},\qquad V_o(\min)=V_{SS}+2V_{ON}.
$$

### Step 5 — Comparison

| Op amp | $V_o(\max)$ | $V_o(\min)$ |
|---|---|---|
| [Fig. 1] | $V_{DD} - V_{ON}$ | $V_{SS} + V_{ON}$ |
| [Fig. 2] | $V_{DD} - V_{ON}$ | $V_{SS} + V_{ON}$ |
| [Fig. 3] | $V_{DD} - 2V_{ON}$ | $V_{SS} + 2V_{ON}$ |
| [Fig. 4] | $V_{DD} - 2V_{ON}$ | $V_{SS} + 2V_{ON}$ |
| [Fig. 5] | $V_{DD} - 2V_{ON}$ | $V_{SS} + 2V_{ON}$ |

The two-stage designs swing within one $V_{ON}$ of each rail, the cascoded ones within two; the differential output swing of each is twice the single-ended range. Cascoding trades one $V_{ON}$ of swing at each end for higher output resistance.
