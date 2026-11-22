# Detailed solution - A319

This is a two-stage CMOS op amp (mirror-loaded n-channel pair M1–M4 with tail M5, common-source p-channel M6 with current-sink load M7) followed by a Darlington emitter follower Q1–Q2 biased by M9. Find the currents from the mirror ratios of M8, compute the two stage gains (the Darlington's gain is about 1), and find the output resistance by reflecting the resistance at each base through $1+\beta_F$. All MOSFETs are saturated with $g_m=\sqrt{2K'(W/L)I_D}$ and $g_{ds}=\lambda I_D$.

### Step 1 — Quiescent currents

M8 (2/2) carries 20 µA; M5, M7 and M9 share its gate voltage, so their currents scale with $W/L$:

$$
I_5=20\ \mu\mathrm A\cdot\frac{12/2}{2/2}=120\ \mu\mathrm A,\qquad I_7=20\ \mu\mathrm A\cdot\frac{4/2}{2/2}=40\ \mu\mathrm A,\qquad I_9=20\ \mu\mathrm A\cdot\frac{20/2}{2/2}=200\ \mu\mathrm A .
$$

M1–M4 share $I_5$: 60 µA each. M6 carries M7's 40 µA (the closed loop sets the input so that it does). Q2's emitter carries $I_9=200$ µA, so $I_{C2}=198\ \mu$A and $I_{B2}=I_{E1}=1.98\ \mu$A; then $I_{C1}=1.96\ \mu$A and $I_{B1}\approx0.02\ \mu$A, which loads the second stage negligibly.

### Step 2 — Small-signal gain

First stage (mirror load, full $g_{m2}v_{in}$ into the M2/M4 node):

$$
g_{m2}=\sqrt{2(25\ \mu\mathrm{A/V^2})(4)(60\ \mu\mathrm A)}=109.5\ \mu\mathrm S,\qquad
A_1=\frac{g_{m2}}{g_{ds2}+g_{ds4}}=\frac{109.5\ \mu\mathrm S}{2(0.04\ \mathrm{V^{-1}})(60\ \mu\mathrm A)}=22.8 .
$$

Second stage:

$$
g_{m6}=\sqrt{2(10\ \mu\mathrm{A/V^2})(7)(40\ \mu\mathrm A)}=74.8\ \mu\mathrm S,\qquad
A_2=\frac{g_{m6}}{g_{ds6}+g_{ds7}}=\frac{74.8\ \mu\mathrm S}{2(0.04\ \mathrm{V^{-1}})(40\ \mu\mathrm A)}=23.4 .
$$

With the Darlington follower's gain about 1 and its loading ignored,

$$
A_v=A_1A_2=22.8\times23.4\approx534\ \mathrm{V/V}.
$$

### Step 3 — Output resistance

At Q1's base the source resistance is the second-stage output, $r_{ds6}\parallel r_{ds7}=1/(3.2\ \mu\mathrm S)=312.5$ kΩ, and $r_{\pi1}=\beta_FV_t/I_{C1}=100(25.9\ \mathrm{mV})/1.96\ \mu\mathrm A=1.32$ MΩ. The resistance seen at Q2's base (looking into Q1's emitter) is

$$
R_{B2}=\frac{r_{\pi1}+r_{ds6}\parallel r_{ds7}}{1+\beta_F}=\frac{(1320+312.5)\ \mathrm{k\Omega}}{101}=16.2\ \mathrm{k\Omega}.
$$

With $r_{\pi2}=100(25.9\ \mathrm{mV})/198\ \mu\mathrm A=13.1$ kΩ,

$$
R_{out}=\frac{r_{\pi2}+R_{B2}}{1+\beta_F}=\frac{(13.1+16.2)\ \mathrm{k\Omega}}{101}\approx290\ \Omega,
$$

and $r_{ds9}=125$ kΩ in parallel is negligible.
