# Detailed solution - A396

In the inverting hysteresis circuit, $v_{IN}$ is compared with the voltage at the noninverting input, which is a resistive mix of the output and $V_{REF}$. The difference of the two trip points fixes the divider ratio; their midpoint fixes $V_{REF}$.

### Step 1 — Trip-point equations

With no comparator input current, superposition gives

$$
v_+=\frac{R_1}{R_1+R_2}v_{OUT}+\frac{R_2}{R_1+R_2}V_{REF}.
$$

The output is high while $v_{IN}<v_+$. A rising input trips while the output is high, and a falling input while it is low:

$$
V_{TRP}^+=\frac{R_1}{R_1+R_2}V_{OH}+\frac{R_2}{R_1+R_2}V_{REF},\qquad
V_{TRP}^-=\frac{R_1}{R_1+R_2}V_{OL}+\frac{R_2}{R_1+R_2}V_{REF}.
$$

### Step 2 — Divider ratio from the hysteresis width

$$
V_{TRP}^+-V_{TRP}^-=\frac{R_1}{R_1+R_2}(V_{OH}-V_{OL})
\quad\Rightarrow\quad
1\ \mathrm V=\frac{R_1}{R_1+R_2}(4\ \mathrm V)
\quad\Rightarrow\quad
R_1+R_2=4R_1,\qquad R_2=3R_1 .
$$

For example, $R_1=100$ kΩ and $R_2=300$ kΩ.

### Step 3 — $V_{REF}$ from the centre of the loop

Adding the two trip-point equations:

$$
\frac{V_{TRP}^++V_{TRP}^-}2=\frac{R_1}{R_1+R_2}\cdot\frac{V_{OH}+V_{OL}}2+\frac{R_2}{R_1+R_2}V_{REF}.
$$

The required centre is $(0.5-0.5)/2=0$ V, and the output levels are symmetric, $V_{OH}+V_{OL}=0$, so $\tfrac34V_{REF}=0$ and

$$
V_{REF}=0\ \mathrm V .
$$

### Step 4 — Check

$$
V_{TRP}^+=\tfrac14(2\ \mathrm V)=0.5\ \mathrm V,\qquad V_{TRP}^-=\tfrac14(-2\ \mathrm V)=-0.5\ \mathrm V .
$$

![Inverting hysteresis loop centred on 0 V with trip points at plus and minus 0.5 V](/q/A396/solution-curves.svg)

The output is high for inputs below $-0.5$ V, low above $+0.5$ V, and in between depends on its previous state; $R_1$ can be connected directly to ground.
