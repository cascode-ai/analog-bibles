# Detailed solution - grsim-03-10

Find the dc currents by walking down from the 5-V input through the two base–emitter drops, accounting for the current the 1-kΩ resistor draws from $Q_1$'s emitter. Then build the small-signal model from the emitter of $Q_2$ backward: the impedance seen at each emitter is reflected to the base by $\beta_0+1$. Finally compare with ngspice operating-point and `.tf` results, with and without the model's $r_b$ and Early effect.

### Step 1 — DC bias

The output sits two base–emitter drops below the input:

$$
V_O=5\ \mathrm V-0.7\ \mathrm V-0.7\ \mathrm V=3.6\ \mathrm V,\qquad I_{50}=\frac{3.6\ \mathrm V}{50\ \Omega}=72\ \mathrm{mA}.
$$

The 1-kΩ resistor is connected across $V_{BE2}$, so it carries $0.7\ \mathrm V/1\ \mathrm{k\Omega}=0.7$ mA into the output node. KCL at the output and at $Q_1$'s emitter:

$$
\begin{aligned}
I_{E2}&=72-0.7=71.3\ \mathrm{mA},&I_{C2}&=\tfrac{200}{201}I_{E2}=70.9\ \mathrm{mA},&I_{B2}&=\tfrac{I_{E2}}{201}=0.355\ \mathrm{mA},\\
I_{E1}&=I_{B2}+0.7\ \mathrm{mA}=1.055\ \mathrm{mA},&I_{C1}&=\tfrac{200}{201}I_{E1}=1.05\ \mathrm{mA}.&&
\end{aligned}
$$

Without the 1-kΩ resistor, $I_{C1}$ would be only $I_{C2}/\beta$; the resistor sets $Q_1$'s current about three times higher.

### Step 2 — Small-signal parameters

With $g_m=I_C/V_T$ and $r_\pi=\beta_0/g_m$:

| | $I_C$ | $g_m$ | $r_\pi$ |
|---|---|---|---|
| $Q_1$ | 1.05 mA | 40.4 mA/V | 4.95 kΩ |
| $Q_2$ | 70.9 mA | 2.73 A/V | 73.3 Ω |

### Step 3 — Input resistance and voltage gain

At $Q_2$'s base, $r_{\pi2}$ and the 1-kΩ resistor both connect to the output, so they form $R_p=r_{\pi2}\parallel1\ \mathrm{k\Omega}=68.3\ \Omega$ between $Q_1$'s emitter and the output. The current through $R_p$ is $i$; $Q_2$ adds $g_{m2}R_pi$, so the output current is $(1+g_{m2}R_p)i$ into 50 Ω. The impedance at $Q_1$'s emitter is therefore

$$
Z_1=R_p+50\ \Omega\,(1+g_{m2}R_p)=68.3\ \Omega+50\ \Omega\,(1+186.3)=9.44\ \mathrm{k\Omega},
$$

and reflecting it through $Q_1$:

$$
R_i=r_{\pi1}+(\beta_0+1)Z_1=4.95\ \mathrm{k\Omega}+201(9.44\ \mathrm{k\Omega})=1.90\ \mathrm{M\Omega}.
$$

The base current of $Q_1$ is $v_i/R_i$; its emitter current $201\,v_i/R_i$ flows into $Z_1$, of which the part producing $v_o$ is $50(1+g_{m2}R_p)$:

$$
\frac{v_o}{v_i}=\frac{201\times50\ \Omega\,(1+g_{m2}R_p)}{R_i}=\frac{201(9.37\ \mathrm{k\Omega})}{1.90\ \mathrm{M\Omega}}=0.990 .
$$

### Step 4 — Output resistance (hand estimate)

With the input source ideal, $Q_1$'s emitter presents about $r_{\pi1}/(\beta_0+1)=24.7\ \Omega$ to $Q_2$'s base (the 1-kΩ path to the output is much larger and is neglected). Looking into $Q_2$'s emitter:

$$
R_o\approx\frac{r_{\pi1}/201+r_{\pi2}}{201}\Big\|\,50\ \Omega=\frac{24.7\ \Omega+73.3\ \Omega}{201}\Big\|\,50\ \Omega=0.49\ \Omega .
$$

### Step 5 — SPICE check

The deck computes the operating point and uses `.tf` to obtain the low-frequency gain, input resistance and output resistance at once:

```spice
* grsim-03-10 Darlington emitter follower
VCC vcc 0 10
VI  vi  0 5
Q1  vcc vi e1 npn
Q2  vcc e1 vo npn
R1  e1 vo 1k
RL  vo 0 50
.model npn npn is=5e-15 bf=200 vaf=130 rb=200
.control
op
print v(vo) @q1[ic] @q2[ic]
tf v(vo) VI
print all
.endc
.end
```

It was run twice: with the model as given, and with `rb` and `vaf` removed (RB = 0, VAF = ∞) to match the hand-analysis assumptions.

| Quantity | Hand | ngspice, RB = 0, VAF = ∞ | ngspice, RB = 200 Ω, VAF = 130 V |
|---|---|---|---|
| $V_O$ | 3.60 V | 3.54 V | 3.48 V |
| $I_{C1}$ | 1.05 mA | 1.13 mA | 1.17 mA |
| $I_{C2}$ | 70.9 mA | 69.7 mA | 68.3 mA |
| $R_i$ | 1.90 MΩ | 1.90 MΩ | 1.61 MΩ |
| $v_o/v_i$ | 0.990 | 0.990 | 0.971 |
| $R_o$ | 0.49 Ω | 0.486 Ω | 1.43 Ω |

### Step 6 — Explaining the differences

- Bias: with $I_S=5\times10^{-15}$ A the base–emitter drops are $V_T\ln(I_C/I_S)\approx0.68$ V for $Q_1$ and 0.79 V for $Q_2$ rather than 0.7 V each. $V_O$ is slightly lower (fewer mA in 50 Ω) and the larger $V_{BE2}$ draws more current through the 1-kΩ resistor, raising $I_{C1}$.
- With RB = 0 and VAF = ∞ the small-signal results match the hand analysis (1.90 MΩ, 0.990, 0.49 Ω).
- With RB = 200 Ω, the base resistance of $Q_2$ adds directly to $r_{\pi2}=73\ \Omega$ in the output path, so $R_o\approx(24.7+200+73)\ \Omega/201+\dots\approx1.5\ \Omega$ dominates. Together with $r_o$ (VAF = 130 V), it also lowers the gain to 0.97 and the input resistance to about 1.6 MΩ.
