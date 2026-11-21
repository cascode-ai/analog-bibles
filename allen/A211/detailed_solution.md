# Detailed solution - A211

M1 is an n-channel follower: it sources current from +2.5 V into the output, while the 200-µA sink and the 10-kΩ resistor take current away. The output is highest when $v_{IN}=+2.5$ V drives M1 hardest; there M1 must supply the sink current plus the resistor current. Write KCL at the output with M1's square-law current and solve.

### Step 1 — Operating conditions of M1

With $v_{IN}=+2.5$ V, M1's gate and drain are both at +2.5 V and its source is at $v_{OUT}$, so

$$
V_{GS1}=V_{DS1}=2.5-v_{OUT}.
$$

Since $V_{DS1}=V_{GS1}>V_{GS1}-V_T$, M1 is saturated, with

$$
I_{D1}=\frac{K'_N}2\frac WL(V_{GS1}-V_T)^2=(5.5\ \mathrm{mA/V^2})(2.5-v_{OUT}-0.7)^2,
$$

using $\frac{K'_N}2\frac WL=\frac{110\ \mu\mathrm{A/V^2}}{2}(100)=5.5\ \mathrm{mA/V^2}$.

### Step 2 — KCL at the output

In steady state the capacitor carries no current, so M1 supplies the sink and the resistor:

$$
(5.5\ \mathrm{mA/V^2})(1.8\ \mathrm V-v_{OUT})^2=200\ \mu\mathrm A+\frac{v_{OUT}}{10\ \mathrm{k\Omega}} .
$$

### Step 3 — Solving

Let $y=1.8\ \mathrm V-v_{OUT}$. The equation becomes $(5.5\ \mathrm{mA/V^2})y^2+(0.1\ \mathrm{mA/V})y-0.38\ \mathrm{mA}=0$, whose positive root is

$$
y=\frac{-0.1+\sqrt{0.1^2+4(5.5)(0.38)}}{2(5.5)}\ \mathrm V=0.254\ \mathrm V,
$$

$$
v_{OUT}(\max)=1.8\ \mathrm V-y=1.55\ \mathrm V .
$$

M1 then carries $200\ \mu\mathrm A+1.546\ \mathrm V/10\ \mathrm{k\Omega}=355\ \mu$A. As a check, $V_{DS1}=0.95$ V exceeds $V_{GS1}-V_T=0.25$ V, so M1 is saturated as assumed. Unlike the p-channel version, the n-channel follower stays on at the top of the swing, and its maximum output is about $v_{IN}-V_T$ minus the overdrive needed for 355 µA.
