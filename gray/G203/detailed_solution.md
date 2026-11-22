# Detailed solution - G203

Solve the gate and drain node equations with $R_F$ as an ordinary resistor between them for the midband gain. Then apply the zero-value time-constant method with $R_F$ included: it shunts $C_{gd}$ directly and loads the gate node seen by $C_{gs}$ through the amplifying drain.

### Step 1 — Device parameters

$$
g_m=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(62.5)(0.5\ \mathrm{mA})}=1.94\ \mathrm{mA/V},\qquad
C_{gs}=\tfrac23(100\ \mu\mathrm m)(1.6\ \mu\mathrm m)(0.7\ \mathrm{fF/\mu m^2})=74.7\ \mathrm{fF}.
$$

### Step 2 — Low-frequency gain

KCL at the drain ($v_o$) and at the gate ($v_g$):

$$
v_o\Bigl(\frac1{R_L}+\frac1{R_F}\Bigr)=v_g\Bigl(\frac1{R_F}-g_m\Bigr)
\;\Rightarrow\;v_o=\frac{(0.02-1.94)\ \mathrm{mS}}{0.22\ \mathrm{mS}}\,v_g=-8.71\,v_g,
$$
$$
\frac{v_i}{R_S}=v_g\Bigl(\frac1{R_S}+\frac1{R_F}\Bigr)-\frac{v_o}{R_F}
\;\Rightarrow\;v_g=0.340\,v_i .
$$

Hence

$$
\frac{v_o}{v_i}=(-8.71)(0.340)=-2.96 .
$$

### Step 3 — Zero-value resistances

- $C_{gs}$ (gate to ground): the gate sees $R_S$ in parallel with the path through $R_F$ to the drain, where the controlled source $g_mv_g$ makes that path look like $(R_F+R_L)/(1+g_mR_L)$:
$$
R_{gs0}=R_S\parallel\frac{R_F+R_L}{1+g_mR_L}=10\ \mathrm{k\Omega}\parallel\frac{55\ \mathrm{k\Omega}}{10.68}=10\ \mathrm{k\Omega}\parallel5.15\ \mathrm{k\Omega}=3.40\ \mathrm{k\Omega}.
$$
- $C_{gd}$ (gate to drain): $R_F$ is directly across it, in parallel with the usual Miller resistance:
$$
R_{gd0}=(R_S+R_L+g_mR_LR_S)\parallel R_F=111.8\ \mathrm{k\Omega}\parallel50\ \mathrm{k\Omega}=34.6\ \mathrm{k\Omega}.
$$

| Capacitor | Resistance | Time constant |
|---|---|---|
| $C_{gs}=74.7$ fF | 3.40 kΩ | 0.254 ns |
| $C_{gd}=14$ fF | 34.6 kΩ | 0.484 ns |

### Step 4 — −3-dB frequency

$$
T_0=0.254+0.484\ \mathrm{ns}=0.737\ \mathrm{ns},\qquad
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=216\ \mathrm{MHz}.
$$

An exact nodal analysis gives 222 MHz. Compared with the stage without feedback (gain −9.68, about 69 MHz), the shunt feedback through $R_F$ lowers the gain by about 3.3 and raises the bandwidth by about 3.1.
