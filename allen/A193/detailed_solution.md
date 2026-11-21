# Detailed solution - A193

In the figure M1 is not diode-connected: its drain is the input node and its gate is the common gate node G, which M3 drives from the input. A rise of the input voltage turns M3 on harder, raises G, and makes M1 sink more current from the input. This shunt feedback lowers the input resistance far below the simple mirror's $1/g_{m1}$. Write KCL at G and at the input node and solve.

### Step 1 — Current through M3

Let $v_{in}$ be the input-node voltage and $v_g$ the voltage of node G. M3 has its gate at the fixed $V_{GG3}$ (ac ground), its source at $v_{in}$ and its drain at $v_g$, so with the p-channel small-signal model its source-to-drain current is

$$
i_3=g_{m3}v_{in}+g_{ds3}(v_{in}-v_g).
$$

### Step 2 — Gate node G

The gates of M1 and M2 draw no current, so $i_3$ can leave G only through the sink's resistance $r_{ds4}$:

$$
i_3=g_{ds4}v_g
\quad\Rightarrow\quad
v_g=\frac{g_{m3}+g_{ds3}}{g_{ds3}+g_{ds4}}\,v_{in}\approx g_{m3}(r_{ds3}\parallel r_{ds4})\,v_{in},
$$

a large voltage gain from the input to the gate of M1.

### Step 3 — Input node

The input current leaves through M1 ($g_{m1}v_g+g_{ds1}v_{in}$) and through M3 ($i_3=g_{ds4}v_g$); $I_1$ is ideal:

$$
i_{in}=g_{ds1}v_{in}+(g_{m1}+g_{ds4})v_g .
$$

Substituting $v_g$:

$$
R_{in}=\frac{v_{in}}{i_{in}}=\frac{1}{g_{ds1}+\dfrac{(g_{m1}+g_{ds4})(g_{m3}+g_{ds3})}{g_{ds3}+g_{ds4}}}
\approx\frac{g_{ds3}+g_{ds4}}{g_{m1}g_{m3}}=\frac{1}{g_{m1}g_{m3}(r_{ds3}\parallel r_{ds4})},
$$

the approximation using $g_m\gg g_{ds}$.

### Step 4 — Interpretation

Compared with the simple mirror's $1/g_{m1}$, the input resistance is lower by the loop gain $g_{m3}(r_{ds3}\parallel r_{ds4})$, typically one to two orders of magnitude. Both output resistances at G matter: neither $r_{ds3}$ nor $r_{ds4}$ is negligible in general. For an ideal sink ($r_{ds4}\to\infty$) the result becomes $R_{in}=1/(g_{m1}+g_{ds1}+g_{m1}g_{m3}r_{ds3})\approx1/(g_{m1}g_{m3}r_{ds3})$.
