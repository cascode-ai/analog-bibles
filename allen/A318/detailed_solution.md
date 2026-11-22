# Detailed solution - A318

The output buffer has two cascaded followers: the p-channel source follower M9 drives node B (the base of Q10), and the npn emitter follower Q10 drives the output. Each follower contributes a pole at roughly its output conductance divided by its node capacitance. First compute the small-signal parameters and node capacitances, then estimate each pole separately, then solve the two coupled nodes together (they are linked by $C_\pi$), and compare with GB.

### Step 1 — Small-signal parameters

$$
g_{m9}=\sqrt{2(50\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm A)}=316\ \mu\mathrm S .
$$

M9's source sits about one $V_{BE}$ above the output (0 V), so $V_{BS9}\approx2.5-0.66=1.84$ V and

$$
g_{mbs9}=\frac{g_{m9}\gamma_P}{2\sqrt{2|\phi_F|+V_{BS9}}}=\frac{(316\ \mu\mathrm S)(0.57)}{2\sqrt{0.8+1.84}}=55\ \mu\mathrm S,\qquad g_{ds8}=g_{ds9}=5\ \mu\mathrm S .
$$

For Q10 at 1 mA: $g_{m10}=1\ \mathrm{mA}/25.9\ \mathrm{mV}=38.6$ mS, $g_\pi=g_{m10}/\beta_F=0.386$ mS; the output load is $G_L=1/500\ \Omega=2$ mS plus $g_{ds11}=40\ \mu$S.

### Step 2 — Node capacitances

With 2 µm × W diffusions at zero bias, $C_{bd}=C_J(2W)+C_{JSW}\cdot2(W+2\ \mu\mathrm m)$ and overlap $C_{gd}=C_{GDO}W$:

| Node | Contributions | Value |
|---|---|---|
| B (to ground) | $C_\mu$, $C_{bd8}$, $C_{gd8}$, $C_{sb9}$ | 1 + 0.27 + 0.03 + 0.02 = 1.32 pF |
| Output (to ground) | $C_L$, $C_{bd11}$, $C_{gd11}$ | 100 + 3.37 + 0.32 = 103.7 pF |
| B to output | $C_\pi$ | 10 pF |
| M9 gate to B | $C_{gs9}$ | 0.019 pF |

### Step 3 — Separate estimates

MOS follower: the conductance at B is $g_{m9}+g_{mbs9}+g_{ds8}+g_{ds9}$, and $C_\pi$, $g_\pi$ act across a follower of gain $A_{BJT}\approx0.95$, so only $(1-A_{BJT})$ of them loads B:

$$
p_{MOS}\approx-\frac{g_{m9}+g_{mbs9}+g_{ds8}+g_{ds9}+g_\pi(1-A_{BJT})}{C_{B}+C_\pi(1-A_{BJT})}\approx-\frac{400\ \mu\mathrm S}{1.82\ \mathrm{pF}}\approx-2.2\times10^8\ \mathrm{rad/s},
$$

with a zero at $-g_{m9}/C_{gs9}\approx-1.7\times10^{10}$ rad/s.

BJT follower: its output resistance is the base-side resistance plus $r_\pi$, divided by $1+\beta_F$:

$$
R_o=\frac{r_\pi+1/(g_{m9}+g_{mbs9}+\dots)}{1+\beta_F}\approx\frac{(2.59+2.62)\ \mathrm{k\Omega}}{101}\approx52\ \Omega,
$$

which in parallel with $R_L\parallel r_{ds11}$ gives about 47 Ω, so

$$
p_{BJT}\approx-\frac1{(47\ \Omega)(104\ \mathrm{pF})}\approx-2.1\times10^8\ \mathrm{rad/s}
$$

(about $-1.9\times10^8$ rad/s with $C_\pi$ added), with a zero at $-(g_{m10}+g_\pi)/C_\pi\approx-3.9\times10^9$ rad/s.

### Step 4 — Coupled solution

The two poles are close and the nodes are tied by $C_\pi$, so solve the two-node system:

$$
\begin{aligned}
&\left[g_B+g_\pi+s(C_B+C_\pi)\right]v_b-(g_\pi+sC_\pi)v_o=g_{m9}v_{in},\\
&-(g_\pi+g_{m10}+sC_\pi)v_b+\left[G_L+g_{ds11}+g_\pi+g_{m10}+s(C_o+C_\pi)\right]v_o=0,
\end{aligned}
$$

with $g_B=g_{m9}+g_{mbs9}+g_{ds8}+g_{ds9}$. The determinant gives a complex pole pair

$$
p\approx(-67\pm j97)\ \mathrm{Mrad/s},\qquad |p|\approx118\ \mathrm{Mrad/s}\ (19\ \mathrm{MHz}),\quad \zeta\approx0.57 .
$$

### Step 5 — Comparison with GB

$GB=2\pi(5\ \mathrm{MHz})=31.4$ Mrad/s, so $10\,GB=314$ Mrad/s. The follower roots lie only about 4–7 times above GB, not beyond $10\,GB$. At GB the pair adds about 18° of phase lag (16–18° from the separate estimates), so a design that ignores the output buffer would lose that much phase margin, for example 60° → about 42°. The zeros are far away and have little effect.
