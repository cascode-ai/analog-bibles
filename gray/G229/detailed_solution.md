# Detailed solution - G229

For a small step the stage is linear, so the output follows its step response. Use the zero-value time constants to find the dominant pole, approximate the stage as single-pole, and read the 10–90% rise time and the waveform from that exponential.

### Step 1 — Gain and dominant time constant

From the square law, $g_m=\sqrt{2k_n'(W/L)I_D}=\sqrt{2(60\ \mu\mathrm{A/V^2})(62.5)(0.5\ \mathrm{mA})}=1.936$ mA/V, so the low-frequency gain is $A_0=-g_mR_L=-38.7$. The capacitances are $C_{gs}=\tfrac23(100)(1.6)(0.7\ \mathrm{fF})=74.7$ fF and $C_{gd}=14$ fF.

The resistance seen by $C_{gs}$ is $R_S$; the resistance seen by $C_{gd}$ includes the Miller term, $R_S+R_L+g_mR_LR_S=417\ \mathrm{k\Omega}$. Therefore

$$
T_0=(10\ \mathrm{k\Omega})(74.7\ \mathrm{fF})+(417\ \mathrm{k\Omega})(14\ \mathrm{fF})=0.75\ \mathrm{ns}+5.84\ \mathrm{ns}=6.59\ \mathrm{ns}.
$$

The exact transfer function is $A_0(1-sC_{gd}/g_m)/(1+b_1s+b_2s^2)$ with $b_1=T_0$ and $b_2=R_SR_LC_{gs}C_{gd}=2.09\times10^{-19}\ \mathrm{s^2}$. Its poles are at $-1.53\times10^{8}$ and $-3.14\times10^{10}$ rad/s, a factor of 200 apart, and the right-half-plane zero is at $g_m/C_{gd}=1.38\times10^{11}$ rad/s. A single pole with $\tau=T_0$ therefore describes the response well.

### Step 2 — 10–90% rise time

For a single pole the step response is $v_o(t)=A_0V_{\text{step}}(1-e^{-t/\tau})$. It reaches 10% of the final value at $t_{10}=\tau\ln(1/0.9)=0.105\tau$ and 90% at $t_{90}=\tau\ln10=2.303\tau$, so

$$
t_r=t_{90}-t_{10}=\tau\ln9=2.2\tau=2.2(6.59\ \mathrm{ns})=14.5\ \mathrm{ns}.
$$

Equivalently, $t_r=0.35/f_{-3\mathrm{dB}}$ with $f_{-3\mathrm{dB}}=1/(2\pi T_0)=24.2$ MHz. The exact two-pole response gives 14.4 ns.

### Step 3 — Output waveform for a 1-mV step

The stage inverts, so the output falls toward $-38.7$ mV:

$$
v_o(t)\approx-38.7\ \mathrm{mV}\left(1-e^{-t/6.59\ \mathrm{ns}}\right).
$$

| $t$ (ns) | 5 | 10 | 15.2 | 20 | 30 | 300 |
|---|---|---|---|---|---|---|
| $v_o$ (mV) | −20.6 | −30.2 | −34.9 | −36.9 | −38.3 | −38.7 |

![Output voltage falling exponentially from 0 to −38.7 mV with 10% and 90% points marked](/q/G229/solution-waveform.svg)

The output is within 1% of its final value after about 30 ns and stays flat at −38.7 mV for the rest of the 300-ns window. The right-half-plane zero lets $C_{gd}$ feed the step forward to the output; in the exact response this produces a positive overshoot at $t=0^+$ of only about 3 µV, invisible on this scale.
