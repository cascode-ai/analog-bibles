# Detailed solution - R446

**Approach.** The choice is decided by the DC level that the error amplifier's output $V_E$ must have. $V_E$ drives the gates of the NMOS current sources $M_3$/$M_4$, so it must sit about one NMOS gate-source voltage above ground. We find the "natural" (balanced) output level of a differential pair with a current-mirror load for each choice of input device, compare it with the required level, and then check the input common-mode range.

### Step 1 — The loop and the level $V_E$ must provide

Reading the figure: the main amplifier is a folded cascode. The NMOS input pair $M_1$–$M_2$ (tail $I_{SS}$) folds its currents into PMOS current sources at the top. PMOS cascodes lead down to the outputs $V_{out1}$, $V_{out2}$, and below them are NMOS cascodes and the NMOS current sources $M_3$, $M_4$ at the bottom. $R_1$ and $R_2$ average the two outputs to produce $V_{out,CM}$, which drives the "+" input of the error amplifier; $V_{REF}$ drives its "−" input; its output $V_E$ drives the gates of $M_3$ and $M_4$.

**Loop polarity.** If $V_{out,CM}$ rises above $V_{REF}$, $V_E$ rises, $M_3$/$M_4$ sink more current, and the outputs are pulled back down. This is negative feedback, as required.

**Required level of $V_E$.** In equilibrium $M_3$ and $M_4$ must carry their design currents, so

$$V_E = V_{GS3} = V_{TH,N} + V_{ov3},$$

where $V_{ov3} = V_{GS3} - V_{TH,N}$ is the overdrive voltage of $M_3$. With typical values ($V_{TH,N} \approx 0.7$ V, $V_{ov3} \approx 0.2$–$0.3$ V):

$$V_E \approx 0.7\ \mathrm{V} + 0.3\ \mathrm{V} \approx 1.0\ \mathrm{V}.$$

That is low, much closer to ground than to $V_{DD} = 3$ V. The inputs of the error amplifier sit at $V_{REF} \approx V_{out,CM}$; we assume the usual mid-supply choice, $V_{REF} \approx 1.5$ V.

### Step 2 — The natural output level of a pair with a current-mirror load

Consider a differential pair with an active current-mirror load (a "five-transistor" amplifier): input devices $M_A$ (diode side) and $M_B$ (output side), tail source $M_T$, mirror devices $M_C$ (diode-connected) and $M_D$ (output side).

With zero differential input and perfect matching, each side carries half the tail current. $M_C$ and $M_D$ then have the same gate-source voltage and the same current, so (with channel-length modulation) they must also have the same drain-source voltage. Hence

$$V_{out}\Big|_{balanced} = V_{diode},$$

the voltage of the diode-connected mirror node. If the output is forced to sit anywhere else, the two branch currents must differ, and that requires a nonzero differential input: a **systematic offset** of roughly

$$V_{os} \approx \frac{V_{out} - V_{diode}}{A_v},$$

where $A_v$ is the amplifier's small-signal gain. In the CMFB loop this offset appears directly as an error $V_{out,CM} - V_{REF}$.

### Step 3 — Option 1: PMOS input pair with an NMOS mirror

The mirror devices are NMOS with sources at ground, so the diode node sits at an NMOS gate-source voltage:

$$V_{out}\Big|_{balanced} = V_{GS,C} = V_{TH,N} + V_{ov,C} \approx 1\ \mathrm{V}.$$

This is exactly the kind of voltage $V_E$ must provide. If $M_C$ is made a scaled replica of $M_3$/$M_4$ (same current density, so the same $V_{GS}$), then $V_{GS,C} = V_{GS3}$ exactly. The CMFB loop then settles with the error amplifier perfectly balanced: no systematic offset, and $V_{out,CM} = V_{REF}$.

<!-- diagram: diagram-01.cir -->

In this version $V_{out,CM}$ drives the diode-side PMOS $M_A$ and $V_{REF}$ drives the output-side PMOS $M_B$, which gives the correct loop polarity: raising $V_{out,CM}$ reduces the current of $M_A$, hence the current mirrored into $M_D$, while $M_B$ (which now takes a larger share of the tail current) pushes more current into the output node, so $V_E$ rises.

**Output range.** $V_E$ can go from about $V_{ov,D}$ (≈ 0.2–0.3 V, where $M_D$ leaves saturation) up to $V_{REF} + |V_{TH,P}| \approx 1.5 + 0.8 = 2.3$ V (where the output-side PMOS $M_B$ leaves saturation). The required ≈ 1 V lies comfortably inside this range.

### Step 4 — Option 2: NMOS input pair with a PMOS mirror

Now the mirror is PMOS with sources at $V_{DD}$, so the balanced output sits one PMOS gate-source voltage below the supply:

$$V_{out}\Big|_{balanced} = V_{DD} - |V_{GS,P}| \approx 3 - (0.8 + 0.2\ \text{to}\ 0.3) \approx 1.9\text{–}2.0\ \mathrm{V}.$$

This is about 1 V *above* the required $V_E \approx 1$ V. Two problems follow:

1. **Systematic offset.** The amplifier must be driven out of balance to pull its output down by about 0.9–1 V. With the modest gain of a simple five-transistor stage (a few tens), that takes an input error of order tens of millivolts, so $V_{out,CM}$ settles noticeably away from $V_{REF}$.
2. **Headroom of the output-side input device.** The NMOS $M_B$ has its gate at about $V_{REF} \approx 1.5$ V and its drain at $V_E$. It stays saturated only if
$$V_E \ge V_{REF} - V_{TH,N} \approx 1.5 - 0.7 = 0.8\ \mathrm{V}.$$
With $V_E \approx 1.0$ V there are only about 0.2 V of margin. A slightly higher $V_{REF}$, a lower $V_{TH,N}$ or a smaller $V_{GS3}$ pushes $M_B$ into triode, the error amplifier's gain collapses, and so does the CMFB loop gain.

The NMOS option can be made to work, for example by adding a level shifter between the amplifier and $M_3$/$M_4$, but it is the weaker, process-sensitive choice.

### Step 5 — Input common-mode range

Both inputs of the error amplifier sit near $V_{REF} \approx 1.5$ V.

- **PMOS pair.** The tail source needs $|V_{ov,T}|$ and the input devices need $|V_{GS,P}|$ below $V_{DD}$:
$$V_{in,CM} \le V_{DD} - |V_{ov,T}| - |V_{GS,P}| \approx 3 - 0.2 - (0.8 + 0.2) = 1.8\ \mathrm{V}$$
(about 1.6–1.8 V depending on the overdrives). The lower limit is very low, $V_{GS,C} - |V_{TH,P}| \approx 0.2$ V. So 1.5 V is acceptable.
- **NMOS pair.** Its range would extend from about $V_{GS,N} + V_{ov,T} \approx 1.1$ V up to above 2 V, so the input range alone would not rule it out.

Only a $V_{REF}$ well above about 1.7 V (an unusually high output CM for this folded cascode) would favour an NMOS pair on input-range grounds. For a normal mid-supply $V_{REF}$ the output level decides.

### Result

Use a **PMOS input pair** (with an NMOS current-mirror load). $V_E$ must sit at $V_{GS3} = V_{TH,N} + V_{ov3} \approx 1$ V to bias the NMOS current sources. A PMOS pair with an NMOS mirror naturally produces an NMOS $V_{GS}$ at its output when balanced. If its mirror device is a scaled replica of $M_3$/$M_4$, the loop settles with no systematic offset and $V_{out,CM} \approx V_{REF}$, with wide output headroom around 1 V. An NMOS pair with a PMOS mirror would naturally sit near $V_{DD} - |V_{GS,P}| \approx 2$ V. It would need a large systematic imbalance to reach 1 V, and its output-side input device would sit only about 0.2 V from triode.

**Common mistake.** Deciding only from the input common-mode range ("the inputs are at mid-supply, so either type works, or NMOS is faster"). The decisive constraint is the DC level of the *output* $V_E$, which must equal the gate-source voltage of the NMOS current sources.

**Common mistake.** Misreading the loop, for example assuming $V_E$ drives the PMOS current sources at the top. In this circuit $V_E$ drives the NMOS sources $M_3$/$M_4$, which is why it must be about 1 V above ground. (If the CMFB controlled PMOS sources, the opposite conclusion would follow.)

**Common mistake.** Claiming the NMOS version cannot work at all. It can be made to work with careful biasing or a level shift, but with a systematic offset and very little headroom. The PMOS version is the natural, robust choice.
