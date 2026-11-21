# Detailed solution - G221

The bias and the device parameters are those of the stage without the added capacitor; the 20-pF capacitor is open at dc and at low frequency, so it does not change the transresistance. For the bandwidth it sits in parallel with $C_{\mu1}$, from the base of $Q_1$ to the output, and is therefore Miller-multiplied by the high gain of the stage. All other zero-value time constants are unchanged.

### Step 1 — Bias and small-signal parameters

$Q_3$ sets $I_C=(10\ \mathrm V-0.7\ \mathrm V)/30\ \mathrm{k\Omega}=0.31$ mA in all three transistors, so $g_m=11.9$ mA/V,

$$
r_{\pi1}=\frac{50}{g_m}=4.19\ \mathrm{k\Omega},\qquad
R_{\text{out}}=r_{o1}\parallel r_{o2}=\frac{50\ \mathrm V}{0.31\ \mathrm{mA}}\parallel\frac{120\ \mathrm V}{0.31\ \mathrm{mA}}=161\ \mathrm{k\Omega}\parallel387\ \mathrm{k\Omega}=113.9\ \mathrm{k\Omega}.
$$

From $f_T$ and the junction formula (reverse voltages from $V_{b1}=9.3$ V, $V_O=0$, $V_{bm}=-9.3$ V, substrate at $-10$ V): $C_{\pi1}=475$ pF ($\tau_F=39.6$ ns for the lateral pnp), $C_{\mu1}=0.236$ pF, $C_{bs1}=0.333$ pF, $C_{\pi2}=C_{\pi3}=5.65$ pF, $C_{\mu2}=0.165$ pF, $C_{cs2}=0.457$ pF, $C_{cs3}=1.33$ pF.

### Step 2 — Low-frequency transresistance

All of $i_i$ is drawn through $r_{\pi1}$, raising $Q_1$'s emitter-base voltage, so its collector delivers $\beta_1i_i$ into the output:

$$
\frac{v_o}{i_i}=+\beta_1R_{\text{out}}=50\,(113.9\ \mathrm{k\Omega})=5.69\ \mathrm{M\Omega}.
$$

### Step 3 — The Miller capacitor

The added 20 pF and $C_{\mu1}$ together, $C_F=20.24$ pF, connect $b_1$ to the output. With the input current source open, $b_1$ sees $r_{\pi1}$, so

$$
R_{\mu1}=r_{\pi1}+R_{\text{out}}+g_mR_{\text{out}}r_{\pi1}=4.19\ \mathrm{k\Omega}+113.9\ \mathrm{k\Omega}+5.69\ \mathrm{M\Omega}=5.81\ \mathrm{M\Omega},
$$
$$
C_FR_{\mu1}=(20.24\ \mathrm{pF})(5.81\ \mathrm{M\Omega})=117.6\ \mu\mathrm s .
$$

### Step 4 — Sum of time constants

| Capacitor | Resistance | Time constant |
|---|---|---|
| $C_{\pi1}=475$ pF | 4.19 kΩ | 1.99 µs |
| $C_{\mu1}+20\ \mathrm{pF}=20.24$ pF | 5.81 MΩ | 117.6 µs |
| $C_{cs2}=0.457$ pF | 113.9 kΩ | 0.052 µs |
| $C_{\mu2}=0.165$ pF | 225 kΩ | 0.037 µs |
| $C_{bs1}$, $C_{\pi2}$, $C_{\pi3}$, $C_{cs3}$ | 4.19 kΩ / 82 Ω | 0.002 µs |

$$
T_0=119.7\ \mu\mathrm s,\qquad f_{-3\text{dB}}\approx\frac1{2\pi T_0}=1.33\ \mathrm{kHz}.
$$

An exact nodal analysis also gives 1.33 kHz, because the Miller capacitor creates a clearly dominant pole. Its effective input capacitance is about $C_F(1+g_mR_{\text{out}})\approx1.4$ nF, so the bandwidth drops about 35 times compared with the stage without it (46 kHz), while the low-frequency transresistance stays at 5.7 MΩ.
