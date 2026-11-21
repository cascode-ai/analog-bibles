# Detailed solution - A207

The output falls as $v_{IN}$ falls, so the minimum occurs at $v_{IN}=-2.5$ V, where the follower M1 conducts most strongly. M1 must then sink the 200-µA source current plus the current it draws from ground through $R_L$ (the output is negative). Write KCL at the output with the square-law current of M1 and solve for $v_{OUT}$.

### Step 1 — Operating conditions of M1

With $v_{IN}=-2.5$ V, M1's source is at $v_{OUT}$, its gate and drain both at −2.5 V, so

$$
V_{SG1}=V_{SD1}=v_{OUT}+2.5 .
$$

Since $V_{SD1}=V_{SG1}>V_{SG1}-|V_T|$, M1 is saturated, with

$$
I_{D1}=\frac{K'_P}{2}\frac WL(V_{SG1}-|V_T|)^2=(7.5\ \mathrm{mA/V^2})(v_{OUT}+2.5-0.7)^2,
$$

using $\frac{K'_P}2\frac WL=\frac{50\ \mu\mathrm{A/V^2}}{2}(300)=7.5\ \mathrm{mA/V^2}$.

### Step 2 — KCL at the output

In steady state the capacitor carries no current. The 200-µA source feeds the output; $R_L$ carries $v_{OUT}/R_L$ to ground; M1 sinks $I_{D1}$:

$$
200\ \mu\mathrm A=\frac{v_{OUT}}{10\ \mathrm{k\Omega}}+(7.5\ \mathrm{mA/V^2})(v_{OUT}+1.8\ \mathrm V)^2 .
$$

### Step 3 — Solving

Let $x=v_{OUT}+1.8$ V. The equation becomes $(7.5\ \mathrm{mA/V^2})x^2+(0.1\ \mathrm{mA/V})x-0.38\ \mathrm{mA}=0$, whose positive root is

$$
x=\frac{-0.1+\sqrt{0.1^2+4(7.5)(0.38)}}{2(7.5)}\ \mathrm V=0.2185\ \mathrm V,
$$

$$
v_{OUT}(\min)=x-1.8\ \mathrm V=-1.58\ \mathrm V .
$$

M1 then carries $(7.5\ \mathrm{mA/V^2})(0.2185\ \mathrm V)^2=358\ \mu$A: the 200 µA from the source plus 158 µA drawn from ground through $R_L$. As a check, $V_{SD1}=0.92$ V exceeds $V_{SG1}-|V_T|=0.22$ V, so M1 is saturated as assumed.
