# Detailed solution - G273

Take the op amp's controlled source $a_vv_x$ as the reference. Since $v_+=0$, $v_x=-v_-$. Find the return ratio $\mathcal R$ with $v_i=0$, the asymptotic gain $A_\infty$ and the feedthrough $d$, then combine them; impedances follow from Blackman's formula with the port shorted and open. Let $R_1=10\ \mathrm{k\Omega}$ and $R_F=100\ \mathrm{k\Omega}$.

### Step 1 — Return ratio

Set $v_i=0$ and drive the output branch with a test voltage $v_t$ in place of $a_vv_x$. Through $R_o+R_F$ it drives $R_1\parallel R_i=10\ \mathrm{k\Omega}\parallel1\ \mathrm{M\Omega}=9.90\ \mathrm{k\Omega}$ to ground:

$$
v_-=v_t\,\frac{9.90\ \mathrm{k\Omega}}{9.90\ \mathrm{k\Omega}+100\ \mathrm{k\Omega}+10\ \mathrm{k\Omega}}=0.0826\,v_t,\qquad v_x=-v_- .
$$

The returned value is $a_vv_x=-a_v(0.0826)v_t$, so

$$
\mathcal R=a_v(0.0826)=16.5 .
$$

### Step 2 — Asymptotic gain and feedthrough

As $a_v\to\infty$, $v_x\to0$: the inverting input is a virtual ground, no current enters $R_i$, and the current $v_i/R_1$ flows through $R_F$, so $A_\infty=-R_F/R_1=-10$.

With $a_v=0$, $v_i$ drives $R_1$ into $R_i\parallel(R_F+R_o)=1\ \mathrm{M\Omega}\parallel110\ \mathrm{k\Omega}=99.1\ \mathrm{k\Omega}$, and $R_F$, $R_o$ divide $v_-$ to the output:

$$
v_-=v_i\,\frac{99.1\ \mathrm{k\Omega}}{10\ \mathrm{k\Omega}+99.1\ \mathrm{k\Omega}}=0.908\,v_i,\qquad
d=0.908\cdot\frac{10\ \mathrm{k\Omega}}{110\ \mathrm{k\Omega}}=0.0826 .
$$

### Step 3 — Closed-loop gain

$$
\frac{v_o}{v_i}=A_\infty\frac{\mathcal R}{1+\mathcal R}+\frac{d}{1+\mathcal R}=(-10)\frac{16.52}{17.52}+\frac{0.0826}{17.52}=-9.429+0.005=-9.42 .
$$

With a return ratio of only 16.5, the gain is 5.8% below the ideal $-10$.

### Step 4 — Input resistance (Blackman)

With $a_v=0$, $v_i$ sees $R_{in}(a_v{=}0)=R_1+R_i\parallel(R_F+R_o)=109.1\ \mathrm{k\Omega}$.

- Input port shorted: this is the condition of Step 1, $\mathcal R(\text{short})=16.52$.
- Input port open ($R_1$ left floating): $v_t$ drives $R_o+R_F$ into $R_i$ alone, $v_-=v_t\,R_i/(R_i+R_F+R_o)$, so $\mathcal R(\text{open})=a_v(0.901)=180.2$.

$$
R_{in}=109.1\ \mathrm{k\Omega}\cdot\frac{1+16.52}{1+180.2}=10.55\ \mathrm{k\Omega},
$$

that is, $R_1$ plus about 547 Ω seen at the inverting node.

### Step 5 — Output resistance (Blackman)

With $a_v=0$ the output sees $R_o$ in parallel with $R_F+R_1\parallel R_i$:

$$
R_{out}(a_v{=}0)=10\ \mathrm{k\Omega}\parallel(100\ \mathrm{k\Omega}+9.90\ \mathrm{k\Omega})=9.17\ \mathrm{k\Omega}.
$$

Shorting the output makes $v_-=0$ ($\mathcal R(\text{short})=0$); with the output open the return ratio is that of Step 1, 16.52. Hence

$$
R_{out}=\frac{9.17\ \mathrm{k\Omega}}{1+16.52}=523\ \Omega .
$$

All four results agree with a direct nodal solution.
