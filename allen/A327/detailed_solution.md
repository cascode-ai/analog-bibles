# Detailed solution - A327

In the original circuit $R_1$ converts $v_{in}$ into a current $v_{in}/R_1$ injected into the low-impedance input of the current amplifier. A differential transconductor does the same job if its output current is $g_mv_{id}$ with $g_m=1/R_1$. Derive the output current of a current-mirror-loaded pair, size it for this $g_m$, and check that its output resistance and dc levels are compatible with the current-amplifier input node.

### Step 1 — Required transconductance

$$
g_m=\frac1{R_1}=\frac1{3.2\ \mathrm{k\Omega}}=312.5\ \mu\mathrm S .
$$

With this value the transconductor current $g_mv_{id}$ replaces $v_{in}/R_1$, so the closed-loop gain keeps its design value:

$$
A_v=-g_mR_2\frac{A_o}{1+A_o}=-(312.5\ \mu\mathrm S)(352\ \mathrm{k\Omega})\frac{0.1}{1.1}=-10,
$$

with the sign set by which input of the pair receives the signal. The amplifier now has a high-impedance differential input instead of the 3.2 kΩ input resistance.

### Step 2 — Output current of a mirror-loaded pair

Use a p-channel source-coupled pair M1–M2 with tail current $I_{SS}$, loaded by an n-channel mirror M3 (diode, on the M1 side) and M4 (output, on the M2 side). The drain of M4/M2 is connected to the current-amplifier input node. A differential input $v_{id}$ produces drain currents $\pm g_{m1}v_{id}/2$; the mirror copies the M1 current to the output, where it adds to the M2 current, so the short-circuit output current is

$$
i_o=g_{m1}v_{id},\qquad g_{m1}=\sqrt{2K'_P\frac WL\frac{I_{SS}}2}=\sqrt{K'_P\frac WLI_{SS}} .
$$

The relevant $g_m$ is that of one input device at $I_{SS}/2$; the output is short-circuited in effect because the current-amplifier input (451 Ω) is far below the pair's output resistance (Step 4).

### Step 3 — Sizing

$$
\frac WLI_{SS}=\frac{g_m^2}{K'_P}=\frac{(312.5\ \mu\mathrm S)^2}{50\ \mu\mathrm{A/V^2}}=1.95\ \mathrm{mA}.
$$

Choose $I_{SS}=100\ \mu$A, so $W/L=19.5\approx20$, i.e. $W_1=W_2=20\ \mu$m with $L=1\ \mu$m. Then

$$
g_{m1}=\sqrt{(50\ \mu\mathrm{A/V^2})(20)(100\ \mu\mathrm A)}=316\ \mu\mathrm S,
$$

within 1.2 % of the target. The mirror load can be small, for example $W_3/L_3=W_4/L_4=5\ \mu\mathrm m/1\ \mu\mathrm m$, and the tail is a p-channel current source carrying 100 µA. An n-channel pair would need $(W/L)I_{SS}=g_m^2/K'_N=0.89$ mA (for example W/L ≈ 9 at 100 µA), but its input common-mode level would then have to stay below about −1 V; the p-channel pair lets the inputs sit near ground.

| Device | Type | W/L (µm/µm) | Current |
|---|---|---|---|
| M1, M2 | p-channel input pair | 20/1 | 50 µA each |
| M3, M4 | n-channel mirror load | 5/1 | 50 µA each |
| M5 | p-channel tail source | — | 100 µA |

### Step 4 — Output resistance and dc compatibility

The output resistance of the transconductor is $r_{ds2}\parallel r_{ds4}$ with $r_{ds}=1/(\lambda I_D)$:

$$
r_{out}=\frac1{(\lambda_N+\lambda_P)(50\ \mu\mathrm A)}=\frac1{(0.09\ \mathrm{V^{-1}})(50\ \mu\mathrm A)}=222\ \mathrm{k\Omega}\gg451\ \Omega,
$$

so practically all of $i_o$ enters the current amplifier.

DC levels, with the square law $V_{ov}=\sqrt{2I_D/[K'(W/L)]}$:

- M4: $V_{ov}=\sqrt{2(50\ \mu\mathrm A)/[(110\ \mu\mathrm{A/V^2})(5)]}=0.43$ V. Its drain is at the input node (−1.7 V) and its source at −3 V, so $V_{DS}=1.3\ \mathrm V>V_{ov}$: saturated.
- M1, M2: $V_{ov}=\sqrt{2(50\ \mu\mathrm A)/[(50\ \mu\mathrm{A/V^2})(20)]}=0.32$ V, $V_{SG}=1.02$ V. With the inputs near 0 V the common source is at about +1.0 V and the drains at about −1.7 V to −1.9 V, so $V_{SD}\approx2.7$–2.9 V: saturated.
- The tail source has $V_{SD}\approx3\ \mathrm V-1.0\ \mathrm V=2.0$ V, ample headroom.
