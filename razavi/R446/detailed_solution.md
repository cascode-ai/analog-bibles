# Detailed solution - R446

**Approach.** The choice is decided by the dc level the error amplifier's output $V_E$ must have: it drives the gates of the NMOS current sources $M_3$/$M_4$, so it must sit about one NMOS gate-source voltage above ground. Compare this with the natural (balanced) output level of a pair with a current-mirror load for each input-device type, then check the input common-mode range.

### Step 1 — The loop and the level $V_E$ must provide

If $V_{out,CM}$ rises above $V_{REF}$, $V_E$ rises, $M_3$/$M_4$ sink more current, and the outputs are pulled back down: negative feedback, as required. In equilibrium $M_3$ and $M_4$ must carry their design currents, so

$$V_E = V_{GS3} = V_{TH,N} + V_{ov3}.$$

With typical values ($V_{TH,N} \approx 0.7$ V, $V_{ov3} \approx 0.2$–$0.3$ V):

$$V_E \approx 0.7\ \mathrm{V} + 0.3\ \mathrm{V} \approx 1.0\ \mathrm{V},$$

much closer to ground than to $V_{DD} = 3$ V. The amplifier inputs sit at $V_{REF} \approx V_{out,CM}$; assume the usual mid-supply choice, $V_{REF} \approx 1.5$ V.

### Step 2 — The natural output level of a pair with a current-mirror load

Name the devices of the five-transistor amplifier: input devices $M_A$ (diode side) and $M_B$ (output side), tail $M_T$, mirror devices $M_C$ (diode-connected) and $M_D$ (output side). With zero differential input and perfect matching, $M_C$ and $M_D$ carry equal currents at equal $V_{GS}$, so (with channel-length modulation) they also have equal $V_{DS}$:

$$V_{out}\Big|_{balanced} = V_{diode}.$$

Forcing the output elsewhere requires unequal branch currents, i.e. a **systematic offset**

$$V_{os} \approx \frac{V_{out} - V_{diode}}{A_v},$$

which in the CMFB loop appears directly as an error $V_{out,CM} - V_{REF}$.

### Step 3 — Option 1: PMOS input pair with an NMOS mirror

The NMOS mirror has its sources at ground, so

$$V_{out}\Big|_{balanced} = V_{GS,C} = V_{TH,N} + V_{ov,C} \approx 1\ \mathrm{V},$$

exactly the kind of voltage $V_E$ must provide. If $M_C$ is a scaled replica of $M_3$/$M_4$ (same current density, so the same $V_{GS}$), then $V_{GS,C} = V_{GS3}$ exactly, and the loop settles with the error amplifier balanced: no systematic offset, and $V_{out,CM} = V_{REF}$.

<!-- diagram: diagram-01.cir -->

Here $V_{out,CM}$ drives the diode-side PMOS $M_A$ and $V_{REF}$ the output-side PMOS $M_B$, which gives the correct polarity: raising $V_{out,CM}$ reduces the current of $M_A$ and hence the current mirrored into $M_D$, while $M_B$, taking a larger share of the tail current, pushes more current into the output, so $V_E$ rises.

**Output range.** $V_E$ can go from about $V_{ov,D}$ (≈ 0.2–0.3 V, where $M_D$ leaves saturation) up to $V_{REF} + |V_{TH,P}| \approx 1.5 + 0.8 = 2.3$ V (where $M_B$ leaves saturation), comfortably containing ≈ 1 V.

### Step 4 — Option 2: NMOS input pair with a PMOS mirror

The PMOS mirror has its sources at $V_{DD}$, so

$$V_{out}\Big|_{balanced} = V_{DD} - |V_{GS,P}| \approx 3 - (0.8 + 0.2\ \text{to}\ 0.3) \approx 1.9\text{–}2.0\ \mathrm{V},$$

about 1 V *above* the required $V_E \approx 1$ V. Two problems follow:

1. **Systematic offset.** Pulling the output down by about 0.9–1 V with the modest gain of a simple five-transistor stage (a few tens) takes an input error of order tens of millivolts, so $V_{out,CM}$ settles noticeably away from $V_{REF}$.
2. **Headroom of $M_B$.** The NMOS $M_B$ has its gate at about $V_{REF} \approx 1.5$ V and its drain at $V_E$, so it stays saturated only if
$$V_E \ge V_{REF} - V_{TH,N} \approx 1.5 - 0.7 = 0.8\ \mathrm{V}.$$
With $V_E \approx 1.0$ V that leaves only about 0.2 V of margin; a slightly higher $V_{REF}$, a lower $V_{TH,N}$ or a smaller $V_{GS3}$ pushes $M_B$ into triode, and the error-amplifier gain and the CMFB loop gain collapse.

The NMOS option can be made to work, for example with a level shifter between the amplifier and $M_3$/$M_4$, but it is the weaker, process-sensitive choice.

### Step 5 — Input common-mode range

Both inputs sit near $V_{REF} \approx 1.5$ V.

- **PMOS pair.** The tail needs $|V_{ov,T}|$ and the input devices $|V_{GS,P}|$ below $V_{DD}$:
$$V_{in,CM} \le V_{DD} - |V_{ov,T}| - |V_{GS,P}| \approx 3 - 0.2 - (0.8 + 0.2) = 1.8\ \mathrm{V}$$
(about 1.6–1.8 V depending on the overdrives). The lower limit is very low, $V_{GS,C} - |V_{TH,P}| \approx 0.2$ V, so 1.5 V is acceptable.
- **NMOS pair.** Its range would run from about $V_{GS,N} + V_{ov,T} \approx 1.1$ V to above 2 V, so the input range alone would not rule it out.

Only a $V_{REF}$ well above about 1.7 V (an unusually high output CM for this folded cascode) would favour an NMOS pair on input-range grounds; for a normal mid-supply $V_{REF}$ the output level decides.

### Result

Use a **PMOS input pair** (with an NMOS current-mirror load). $V_E$ must sit at $V_{GS3} = V_{TH,N} + V_{ov3} \approx 1$ V to bias the NMOS current sources. A PMOS pair with an NMOS mirror naturally produces an NMOS $V_{GS}$ at its output when balanced. If its mirror device is a scaled replica of $M_3$/$M_4$, the loop settles with no systematic offset and $V_{out,CM} \approx V_{REF}$, with wide output headroom around 1 V. An NMOS pair with a PMOS mirror would naturally sit near $V_{DD} - |V_{GS,P}| \approx 2$ V. It would need a large systematic imbalance to reach 1 V, and its output-side input device would sit only about 0.2 V from triode.

**Common mistake.** Deciding only from the input common-mode range ("the inputs are at mid-supply, so either type works, or NMOS is faster"). The decisive constraint is the dc level of the *output* $V_E$, which must equal $V_{GS}$ of the NMOS current sources.

**Common mistake.** Assuming $V_E$ drives the PMOS current sources at the top. Here it drives the NMOS sources $M_3$/$M_4$, which is why it must be about 1 V above ground; with PMOS sources the opposite conclusion would follow.

**Common mistake.** Claiming the NMOS version cannot work at all. It can, with careful biasing or a level shift, but with a systematic offset and very little headroom.
