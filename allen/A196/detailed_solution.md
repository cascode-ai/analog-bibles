# Detailed solution - A196

A mirror becomes a current amplifier once its input and output are biased by dc sources, so that only the signal currents enter and leave the terminals. The input resistance is that of the diode-connected M4. The output resistance is that of the cascode M3 over M2, raised further by the regulating amplifier M1, which holds M2's drain nearly constant.

### Step 1 — Implementation as a current amplifier

- **Input:** a dc current source $I_{BIAS}$ from $V_{DD}$ into the drain/gate of M4, with the signal $i_{in}$ applied at the same node, so $I_I=I_{BIAS}+i_{in}$.
- **Regulation:** $I_{REG}$ from an ideal current source into the drain of M1 (the gate node of M3).
- **Output:** the signal is taken at the drain of M3. A dc current source from $V_{DD}$ equal to the quiescent $I_O$ supplies the bias at that node, so only $i_{out}$ flows in the load.

M2 has the same $v_{GS}$ as M4 and, with M1 holding its drain steady, copies M4's current in the ratio of the aspect ratios, so the current gain is

$$
A_i=\frac{i_{out}}{i_{in}}=\frac{W_2/L_2}{W_4/L_4}.
$$

### Step 2 — Input resistance

Only the gates of M4 and M2 attach to the input node besides M4's own drain, and the bias source is ideal, so the input sees the diode-connected M4:

$$
R_{in}=\frac{1}{g_{m4}+g_{ds4}}\approx\frac1{g_{m4}} .
$$

### Step 3 — Output resistance

Set the input to ac ground, so M2's gate is fixed and M2 acts as its $r_{ds2}$. Drive the drain of M3 with a test current $i_x$, which flows down through M3 into M2. Call $v_s$ the voltage at M3's source (M2's drain, M1's gate):

$$
v_s=i_xr_{ds2}.
$$

M1, a common-source stage loaded by the ideal source $I_{REG}$, amplifies $v_s$ onto the gate of M3:

$$
v_{g3}=-g_{m1}r_{ds1}v_s .
$$

M3's drain current equals $i_x$:

$$
i_x=g_{m3}(v_{g3}-v_s)+\frac{v_x-v_s}{r_{ds3}} .
$$

Substituting $v_s$ and $v_{g3}$ and solving for $v_x/i_x$:

$$
R_{out}=r_{ds2}+r_{ds3}+g_{m3}r_{ds3}r_{ds2}\left(1+g_{m1}r_{ds1}\right)\approx g_{m1}r_{ds1}\,g_{m3}r_{ds3}\,r_{ds2}.
$$

### Step 4 — Interpretation

The ordinary cascode would give $g_{m3}r_{ds3}r_{ds2}$; the regulating loop multiplies it by the gain $1+g_{m1}r_{ds1}$ of M1, giving an output resistance of order $g_m^2r_{ds}^3$. The input, by contrast, stays at the low $1/g_{m4}$ of a diode, which is what a current amplifier needs: low input resistance, very high output resistance.
