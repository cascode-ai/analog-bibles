# Detailed solution - A160

Model each transistor's noise as a voltage source $\overline{v_{ni}^2}$ in series with its gate, short the output to ac ground, and find the noise current each source delivers into the short. Their uncorrelated sum $\overline{i_{o}^2}$, divided by the square of the transconductance from $v_{in}$ to the short-circuit output current, is the equivalent input noise.

### Step 1 — Reference transconductance

From the signal analysis of this amplifier, a differential input $v_{in}=v_1-v_2$ pushes $g_{m1}v_{in}/2$ through M2 directly and $g_{m1}v_{in}/2$ through M1 → M3 → M4 into the output, so the short-circuit output current is

$$
i_o=g_{m1}v_{in},\qquad \overline{v_{eq}^2}=\frac{\overline{i_o^2}}{g_{m1}^2}.
$$

Each gate-referred source $v_{ni}$ of a saturated transistor produces a drain noise current $g_{mi}v_{ni}$ in parallel with its channel.

### Step 2 — Input pair M1, M2

A source $v_{n1}$ in series with M1's gate is indistinguishable from an extra input $v_1$; it therefore gives $i_o=g_{m1}v_{n1}$ (half through each path, as for the signal). Likewise $v_{n2}$ gives $i_o=-g_{m2}v_{n2}=-g_{m1}v_{n2}$. Their contribution is $g_{m1}^2(\overline{v_{n1}^2}+\overline{v_{n2}^2})$.

### Step 3 — Mirror M3, M4 and current sources M6, M7

**M3.** Its noise current $g_{m3}v_{n3}$ flows inside the diode. The total current into node A (M1–M3–M6 drains) is fixed by M6 and M1, so the node voltage moves until the channel current cancels the noise current: $g_{m3}v_a=-g_{m3}v_{n3}$, i.e. $v_a=-v_{n3}$ (neglecting $g_{ds}\ll g_{m3}$). M4 shares this gate voltage and delivers $g_{m4}v_a=-g_{m3}v_{n3}$ to the output.

**M4.** Its noise current $g_{m4}v_{n4}=g_{m3}v_{n4}$ goes straight into the output short.

**M6.** Its noise current $g_{m6}v_{n6}$ enters node A. The lowest-impedance path there is the diode M3 ($1/g_{m3}$), so the whole current flows into M3 and M4 copies it to the output: $|i_o|=g_{m6}v_{n6}$.

**M7.** Its noise current $g_{m7}v_{n7}=g_{m6}v_{n7}$ goes straight into the output.

These give $g_{m3}^2(\overline{v_{n3}^2}+\overline{v_{n4}^2})+g_{m6}^2(\overline{v_{n6}^2}+\overline{v_{n7}^2})$.

### Step 4 — Tail transistor M5

A noise current $i_{n5}$ in M5 divides equally between M1 and M2, because the pair is symmetric for a common-mode current. The half in M2 raises the current drawn from the output by $i_{n5}/2$. The half in M1 is taken from node A, whose supply M6 is fixed, so M3's current, and M4's copy of it, fall by $i_{n5}/2$. The two changes at the output cancel, so M5 does not contribute (to first order; a residue of order $(g_{ds}/g_m)^2$ remains in an exact analysis).

### Step 5 — Equivalent input noise

Adding the uncorrelated contributions and dividing by $g_{m1}^2$:

$$
\overline{v_{eq}^2}=\overline{v_{n1}^2}+\overline{v_{n2}^2}+\left(\frac{g_{m3}}{g_{m1}}\right)^2\left(\overline{v_{n3}^2}+\overline{v_{n4}^2}\right)+\left(\frac{g_{m6}}{g_{m1}}\right)^2\left(\overline{v_{n6}^2}+\overline{v_{n7}^2}\right).
$$

With the matched pairs this is

$$
\overline{v_{eq}^2}=2\overline{v_{n1}^2}+2\left(\frac{g_{m3}}{g_{m1}}\right)^2\overline{v_{n3}^2}+2\left(\frac{g_{m6}}{g_{m1}}\right)^2\overline{v_{n6}^2}.
$$

For the given sizes, M1 and M3 are both n-channel at 50 µA, so $g_{m3}=g_{m1}$, and with $g_m=\sqrt{2K'(W/L)I_D}$

$$
\left(\frac{g_{m6}}{g_{m1}}\right)^2=\frac{K'_PI_6}{K'_NI_1}=\frac{(50\ \mu\mathrm{A/V^2})(100\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(50\ \mu\mathrm A)}=0.91 .
$$

The current sources M6, M7 thus contribute almost as much as the input pair: $\overline{v_{eq}^2}=2\overline{v_{n1}^2}+2\overline{v_{n3}^2}+1.82\,\overline{v_{n6}^2}$.
