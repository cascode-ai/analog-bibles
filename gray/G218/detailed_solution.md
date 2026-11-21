# Detailed solution - G218

Apply the zero-value time-constant method to the MOS "Darlington". The circuit has three nodes: the gate of $M_1$ ($g_1$), the joined source of $M_1$ and gate of $M_2$ ($s_1$), and the output (both drains). With $v_i=0$, $g_1$ sees $R_S$; node $s_1$ is loaded only by the ideal bias source, so the resistance it presents is set entirely by $M_1$'s transconductance.

### Step 1 — Device parameters

$$
g_{m1}=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(62.5)(50\ \mu\mathrm A)}=0.612\ \mathrm{mA/V}\;\Bigl(\frac1{g_{m1}}=1.63\ \mathrm{k\Omega}\Bigr),\qquad
g_{m2}=2.74\ \mathrm{mA/V},
$$
$$
C_{gs}=\tfrac23(100\ \mu\mathrm m)(1.6\ \mu\mathrm m)(0.7\ \mathrm{fF/\mu m^2})=74.7\ \mathrm{fF}.
$$

At low frequency $M_1$ is a unity-gain follower, so the gain is $-g_{m2}R_L=-8.22$ and the transconductance from $v_{g1}$ to the output current is $g_{m2}$.

### Step 2 — Capacitors at node $s_1$ and across $M_1$

- $C_{gs1}$ ($g_1$ to $s_1$): a test current into $s_1$ can leave only through $M_1$'s channel, so KCL at $s_1$ gives $i_x=-g_{m1}v_{gs1}$ and the resistance is $1/g_{m1}=1.63$ kΩ, independent of $R_S$.
- $C_{sb1}$ and $C_{gs2}$ ($s_1$ to ground): with $g_1$ at ground through $R_S$ (no gate current), the node $s_1$ is the output of an unloaded follower: $1/g_{m1}=1.63$ kΩ.

### Step 3 — Capacitors to the output

- $C_{gd1}$ ($g_1$ to output): the gate node sees $R_A=R_S=100$ kΩ and the gain from $v_{g1}$ to the output current is $g_{m2}$:
$$
R_{gd1}=R_S+R_L+g_{m2}R_LR_S=100+3+821.6\ \mathrm{k\Omega}=925\ \mathrm{k\Omega}.
$$
- $C_{gd2}$ ($s_1$ to output): $s_1$ sees $1/g_{m1}$, and a voltage there changes the output current by $g_{m2}-g_{m1}=2.13$ mA/V ($M_1$'s current falls as its source rises):
$$
R_{gd2}=\frac1{g_{m1}}+R_L+(g_{m2}-g_{m1})R_L\frac1{g_{m1}}=1.63+3+10.4\ \mathrm{k\Omega}=15.0\ \mathrm{k\Omega}.
$$
- $C_{db1}$, $C_{db2}$ (output to body, ac ground): $R_L=3$ kΩ each.

### Step 4 — Sum of time constants

| Capacitor | Value | Resistance | Time constant |
|---|---|---|---|
| $C_{gs1}$ | 74.7 fF | 1.63 kΩ | 0.12 ns |
| $C_{gd1}$ | 14 fF | 925 kΩ | 12.94 ns |
| $C_{sb1}$ | 180 fF | 1.63 kΩ | 0.29 ns |
| $C_{gs2}$ | 74.7 fF | 1.63 kΩ | 0.12 ns |
| $C_{gd2}$ | 14 fF | 15.0 kΩ | 0.21 ns |
| $C_{db1}$, $C_{db2}$ | 200 fF each | 3 kΩ | 0.60 ns each |

$$
T_0=14.9\ \mathrm{ns},\qquad f_{-3\text{dB}}\approx\frac1{2\pi T_0}=10.7\ \mathrm{MHz}.
$$

An exact nodal analysis gives 11.2 MHz. $C_{gd1}$ accounts for almost 90 % of $T_0$: it connects the high-resistance input node ($R_S=100$ kΩ) to the output and is Miller-multiplied by the gain of $M_2$.
