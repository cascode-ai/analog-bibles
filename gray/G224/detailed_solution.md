# Detailed solution - G224

Find the tail current from the Widlar source $Q_5$–$Q_6$, then the small-signal parameters of the pair and the active loads. Because the output is taken differentially and the circuit is symmetric, only the differential-mode half-circuit matters: the common emitter node is an ac ground, the pnp load bases at $V_B$ are ac ground, and each side sees half of $v_i$. The DM half-circuit is a common-emitter stage with a 20-kΩ source resistance and the load $r_{o1}\parallel r_{o3}$.

### Step 1 — Bias

$Q_6$ is diode-connected with its base and collector at $-10\ \mathrm V+0.7\ \mathrm V=-9.3$ V, so $R_{B2}$ carries

$$
I_{\text{REF}}=\frac{0-(-9.3\ \mathrm V)}{20\ \mathrm{k\Omega}}=0.465\ \mathrm{mA}.
$$

$Q_5$ has $R_{B1}$ in its emitter, forming a Widlar source. KVL around the two base-emitter junctions gives

$$
V_T\ln\frac{I_{\text{REF}}}{I_{C5}}=I_{C5}R_{B1}
\;\Rightarrow\;
(26\ \mathrm{mV})\ln\frac{465\ \mu\mathrm A}{I_{C5}}=I_{C5}(10\ \mathrm{k\Omega})
\;\Rightarrow\;I_{C5}\approx10\ \mu\mathrm A,
$$

so $I_{C1}=I_{C2}=5\ \mu$A (check: $26\ \mathrm{mV}\cdot\ln46.5=99.8$ mV $\approx(10\ \mu\mathrm A)(10\ \mathrm{k\Omega})$). $V_B$ is set so that $Q_3$, $Q_4$ also carry 5 µA with the collectors at +5 V.

### Step 2 — Small-signal parameters and gain

$$
g_{m1}=\frac{5\ \mu\mathrm A}{26\ \mathrm{mV}}=0.192\ \mathrm{mA/V},\quad r_{\pi1}=\frac{100}{g_{m1}}=521\ \mathrm{k\Omega},\quad
r_{o1}=\frac{120\ \mathrm V}{5\ \mu\mathrm A}=24\ \mathrm{M\Omega},\quad r_{o3}=\frac{50\ \mathrm V}{5\ \mu\mathrm A}=10\ \mathrm{M\Omega},
$$

so each collector sees $R_L=r_{o1}\parallel r_{o3}=7.07$ MΩ. With $\pm v_i/2$ at the two inputs, each collector moves by $\mp g_{m1}R_L\frac{r_{\pi1}}{r_{\pi1}+20\ \mathrm{k\Omega}}\frac{v_i}2$, and $v_o=v_{c1}-v_{c2}$:

$$
\frac{v_o}{v_i}=-g_{m1}R_L\frac{r_{\pi1}}{r_{\pi1}+20\ \mathrm{k\Omega}}=-(1357)(0.963)=-1.31\times10^3 .
$$

### Step 3 — Capacitances in the half-circuit

$\tau_F$ of the npn from $f_T$ at 1 mA: $(12.24-0.7-3)\ \mathrm{pF}/38.5\ \mathrm{mA/V}=222$ ps, so $C_{\pi1}=(222\ \mathrm{ps})(0.192\ \mathrm{mA/V})+3\ \mathrm{pF}=3.04$ pF. Junction capacitances, with the base of $Q_1$ at about 0 V, collectors at +5 V, $V_B=9.3$ V and the substrate at −10 V:

| Capacitance | Connection | $V_R$ | Value |
|---|---|---|---|
| $C_{\mu1}$ | base to collector of $Q_1$ | 5 V | 0.220 pF |
| $C_{cs1}$ | output to substrate | 15 V | 0.376 pF |
| $C_{\mu3}$ | output to base of $Q_3$ (ac ground) | 4.3 V | 0.337 pF |

$C_{\pi3}$ and $C_{bs3}$ have both ends at ac ground, so the lateral-pnp $f_T$ is not needed.

### Step 4 — Zero-value time constants

The base node sees $R_{\pi0}=20\ \mathrm{k\Omega}\parallel r_{\pi1}=19.3$ kΩ.

- $C_{\pi1}$: $R_{\pi0}=19.3$ kΩ.
- $C_{\mu1}$: $R_{\pi0}+R_L+g_{m1}R_LR_{\pi0}=19.3\ \mathrm{k\Omega}+7.07\ \mathrm{M\Omega}+26.1\ \mathrm{M\Omega}=33.2$ MΩ.
- $C_{cs1}$ and $C_{\mu3}$ (output to ac ground): $R_L=7.07$ MΩ.

| Capacitor | Value | Resistance | Time constant |
|---|---|---|---|
| $C_{\pi1}$ | 3.04 pF | 19.3 kΩ | 0.059 µs |
| $C_{\mu1}$ | 0.220 pF | 33.2 MΩ | 7.32 µs |
| $C_{cs1}$ | 0.376 pF | 7.07 MΩ | 2.66 µs |
| $C_{\mu3}$ | 0.337 pF | 7.07 MΩ | 2.38 µs |

$$
T_0=12.42\ \mu\mathrm s,\qquad f_{-3\text{dB}}\approx\frac1{2\pi T_0}=12.8\ \mathrm{kHz}.
$$

An exact analysis of the half-circuit also gives 12.8 kHz. The 5-µA bias makes the output resistance very large, so the Miller term of $C_{\mu1}$ and the two output-node capacitances, each with only a few tenths of a picofarad, limit the bandwidth.
