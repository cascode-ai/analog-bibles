# Detailed solution - G239

This is the bipolar version of a current mirror: $Q_1$ converts $i_i$ into a base–emitter voltage that $Q_2$ converts back into $i_o$. All other nodes are at ac ground, so there is one pole, set by the common base node. Unlike the MOS mirror, the base currents and the diffusion capacitance $\tau_Fg_m$ must be included.

### Step 1 — Small-signal parameters

In the forward-active region $g_m=I_C/V_T$ and $r_\pi=\beta/g_m$. The base–emitter capacitance is the diffusion capacitance plus the depletion capacitance, $C_\pi=\tau_Fg_m+C_{je}$:

| Device | $g_m$ (mA/V) | $r_\pi$ (kΩ) | $\tau_Fg_m$ (pF) | $C_\pi$ (pF) |
|---|---|---|---|---|
| $Q_1$ | 38.46 | 5.2 | 7.69 | 8.69 |
| $Q_2$ | 153.8 | 1.3 | 30.8 | 34.8 |

For example, $\tau_Fg_{m1}=(0.2\ \mathrm{ns})(38.46\ \mathrm{mA/V})=7.69$ pF.

### Step 2 — Low-frequency current gain

With $r_b=0$ and $r_o=\infty$, the common base node (voltage $v_{be}$) is loaded by the diode-connected $Q_1$ ($g_{m1}$ plus $1/r_{\pi1}$) and by the base of $Q_2$ ($1/r_{\pi2}$). KCL at that node:

$$
i_i=v_{be}\left(g_{m1}+\frac1{r_{\pi1}}+\frac1{r_{\pi2}}\right)=v_{be}(38.46+0.19+0.77)\ \mathrm{mA/V}=v_{be}(39.42\ \mathrm{mA/V}).
$$

The output current is $i_o=g_{m2}v_{be}$, so

$$
\frac{i_o}{i_i}=\frac{g_{m2}}{g_{m1}+1/r_{\pi1}+1/r_{\pi2}}=\frac{153.8}{39.42}=3.90 .
$$

The base currents of the two devices take about 2.4% of $i_i$, lowering the gain from the area ratio of 4.

### Step 3 — Node resistance and capacitance

The resistance at the base node is

$$
R=\frac1{g_{m1}}\parallel r_{\pi1}\parallel r_{\pi2}=\frac1{39.42\ \mathrm{mA/V}}=25.4\ \Omega .
$$

Capacitors from the base node to ac ground: $C_{\pi1}$, $C_{cs1}$ (the collector of $Q_1$ is the base node), $C_{\pi2}$ and $C_{\mu2}$ (the collector of $Q_2$ is an ac short). $C_{\mu1}$ is shorted by the diode connection, and $C_{cs2}$ has both ends at ac ground.

$$
C_T=C_{\pi1}+C_{cs1}+C_{\pi2}+C_{\mu2}=8.69+1+34.8+0.8=45.3\ \mathrm{pF}.
$$

### Step 4 — −3-dB frequency and rise time

With a single resistance in the circuit, the zero-value sum has one term and gives the exact pole:

$$
T_0=RC_T=(25.4\ \Omega)(45.3\ \mathrm{pF})=1.15\ \mathrm{ns},\qquad
f_{-3\mathrm{dB}}=\frac1{2\pi T_0}=139\ \mathrm{MHz}.
$$

The right-half-plane zero at $g_{m2}/C_{\mu2}=1.92\times10^{11}$ rad/s (31 GHz) is negligible. For a single pole the 10–90% rise time is

$$
t_r=2.2\,T_0=2.2(1.15\ \mathrm{ns})=2.53\ \mathrm{ns}.
$$

This bipolar mirror is about 6 times slower than the MOS mirror with the same currents (823 MHz). The diffusion capacitances grow with current together with $g_m$, so they alone contribute $\tau_F(g_{m1}+g_{m2})/g_{m1}=5\tau_F=1.0$ ns of the 1.15-ns time constant; the node bandwidth cannot exceed roughly $1/(2\pi\cdot5\tau_F)$ however the bias is chosen.
