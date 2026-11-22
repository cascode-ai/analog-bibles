# Detailed solution - A281

M10 is an n-channel transistor used as the nulling resistor in series with $C_c$. Its gate is tied to $V_{DD}$, but its source and drain sit at the output voltage, and its bulk is at $V_{SS}$, so both its gate drive and its threshold (through the body effect) depend on $v_{out}$. Find the output voltage at which M10 stops conducting, compare it with the waveform, and then move or modify the resistor so that its resistance no longer depends on the output.

### Step 1 — Bias of M10

M10 carries no dc current (it is in series with a capacitor), so in the triode region it has $V_{DS10}\approx0$ and both its source and drain are at the dc output voltage $v_{out}$ (node 7 = node 17). Hence

$$
V_{GS10}=V_{DD}-v_{out}=2.5\ \mathrm V-v_{out},\qquad V_{SB10}=v_{out}-V_{SS}=v_{out}+2.5\ \mathrm V,
$$
$$
V_{T10}=V_{TN}+\gamma_N\left(\sqrt{2|\phi_F|+V_{SB10}}-\sqrt{2|\phi_F|}\right)=0.7+0.35\left(\sqrt{0.5+v_{out}+2.5}-\sqrt{0.5}\right)\ \mathrm V .
$$

As the output rises, the gate drive falls and the threshold rises.

### Step 2 — Resistance of M10 versus output voltage

In deep triode, $R_{10}=1/[K'_N(W/L)_{10}(V_{GS10}-V_{T10})]$ with $(W/L)_{10}=1$:

| $v_{out}$ (V) | $V_{GS10}$ (V) | $V_{T10}$ (V) | $R_{10}$ |
|---|---|---|---|
| −1.5 | 4.0 | 0.88 | 11.5 kΩ |
| 0 | 2.5 | 1.06 | 24.8 kΩ |
| 1.0 | 1.5 | 1.15 | 103 kΩ |
| 1.5 | 1.0 | 1.19 | off |

Setting $V_{GS10}=V_{T10}$ gives the turn-off point $v_{out}\approx1.32$ V (where $V_{T10}\approx1.18$ V). For comparison, the bias string M9–M8 sets $I_8\approx22.7$ µA, M7 mirrors $I_7\approx36$ µA, and $1/g_{m6}=1/\sqrt{2(28\ \mu\mathrm{A/V^2})(20)(36\ \mu\mathrm A)}\approx5$ kΩ, so the resistor is already far above its intended value of order $1/g_{m6}$ by $v_{out}=1$ V.

### Step 3 — Cause of the oscillation

In the unity-gain follower the output follows the ±1.5-V sine. Above about 1.3 V, M10 is off, so $C_c$ is disconnected from the output: there is no Miller pole splitting, the op amp has two comparable high-impedance poles, and the follower loop (the most demanding feedback case, $\beta=1$) is unstable. It therefore rings over the top of the swing, exactly as the waveform shows; as $R_{10}$ grows towards that point, the RHP zero also moves down and erodes the margin. On the negative half-cycle $V_{GS10}$ is large and $V_{SB10}$ small, $R_{10}$ stays near 10 kΩ, and the circuit is stable.

### Step 4 — Fixes

- Move M10 to the other side of $C_c$, between node 4 (first-stage output) and $C_c$. Node 4 sits at $V_{SS}+V_{GS6}\approx-1.4$ V almost independently of the output, so $V_{GS10}\approx3.9$ V and $V_{SB10}$ is small: M10 stays on with a nearly constant resistance.
- Or add a p-channel transistor with its gate at $V_{SS}$ in parallel with M10, forming a transmission gate that conducts at high output voltages.
- Or drive M10's gate from a bias circuit that tracks the node voltage, so that its resistance stays at the design value (for example $\approx1/g_{m6}$ or slightly larger to place the zero in the LHP).
