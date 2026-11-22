# Detailed solution - G258

Take the controlled source $g_{m1}v_{be1}$ of $Q_1$ as the reference. Compute its return ratio with the input current source zeroed (open), the asymptotic gain and the direct feedthrough, then apply Blackman's formula. Unlike the MOS version, $r_{\pi1}$ keeps a path from the base to ground, so $R_F$ carries current even with the input open, and each base loads the preceding collector.

### Step 1 — Small-signal parameters

$g_m=I_C/V_T=38.46$ mA/V, $r_\pi=\beta/g_m=5.2\ \mathrm{k\Omega}$, $r_o=V_A/I_C=50\ \mathrm{k\Omega}$; let $R=5\ \mathrm{k\Omega}\parallel r_o=4545\ \Omega$. The collectors of $Q_1$ and $Q_2$ are loaded by the next base:

$$
R\parallel r_\pi=2425\ \Omega,\qquad g_m(2425\ \Omega)=93.3 .
$$

### Step 2 — Return ratio

With $i_i=0$, replace $g_{m1}v_{be1}$ by a test current $i_t$. Two stages each give a gain magnitude of 93.3. $Q_3$ drives $R$ in parallel with the path $R_F+r_{\pi1}$ to ground, and $r_{\pi1}$ takes a fraction of $v_o$ back to the base of $Q_1$:

$$
R_3=R\parallel(R_F+r_\pi)=4545\ \Omega\parallel15.2\ \mathrm{k\Omega}=3499\ \Omega,\qquad
\frac{v_{be1}}{v_o}=\frac{r_\pi}{r_\pi+R_F}=0.342 .
$$

The three inversions make the returned source value $g_{m1}v_{be1}$ opposite to $i_t$, so

$$
\mathcal R=(93.3)^2\,(g_mR_3)\,(0.342)=(8702)(134.6)(0.342)=4.01\times10^{5}.
$$

### Step 3 — Transresistance

As $g_{m1}\to\infty$, $v_{be1}\to0$, so no current flows in $r_{\pi1}$ and all of $i_i$ flows through $R_F$: $A_\infty=-R_F=-10\ \mathrm{k\Omega}$.

With $g_{m1}=0$, $Q_2$ and $Q_3$ receive no signal; $i_i$ sees $r_{\pi1}\parallel(R_F+R)=3831\ \Omega$, and $R_F$, $R$ divide that voltage to the output:

$$
d=3831\ \Omega\times\frac{4545\ \Omega}{14{,}545\ \Omega}=1197\ \Omega .
$$

$$
\frac{v_o}{i_i}=(-10\ \mathrm{k\Omega})\frac{\mathcal R}{1+\mathcal R}+\frac{1197\ \Omega}{1+\mathcal R}=-9999.97\ \Omega\approx-10.0\ \mathrm{k\Omega}.
$$

The loop transmission is $\mathcal R=4.0\times10^{5}$.

### Step 4 — Input and output impedances

In both cases shorting the port makes $v_{be1}=0$ (input) or $v_o=0$ (output), so $\mathcal R(\text{short})=0$, while $\mathcal R(\text{open})=4.01\times10^5$:

$$
Z_{in}=\frac{r_\pi\parallel(R_F+R)}{1+\mathcal R}=\frac{3831\ \Omega}{4.01\times10^{5}}=9.56\ \mathrm{m\Omega},\qquad
Z_{out}=\frac{R\parallel(R_F+r_\pi)}{1+\mathcal R}=\frac{3499\ \Omega}{4.01\times10^{5}}=8.73\ \mathrm{m\Omega}.
$$

These equal the two-port results, although $\mathcal R$ differs from the two-port loop gain ($3.58\times10^5$) because the two methods split the circuit differently.

### Step 5 — With a 1-kΩ source resistance

$R_S=1\ \mathrm{k\Omega}$ now shunts $r_{\pi1}$: the base node presents $r_\pi\parallel R_S=839\ \Omega$ to ground. In the return-ratio calculation:

$$
R_3=R\parallel(R_F+839\ \Omega)=3202\ \Omega,\qquad \frac{v_{be1}}{v_o}=\frac{839}{10{,}839}=0.0774,
$$

$$
\mathcal R=(93.3)^2\,(g_mR_3)(0.0774)=(8702)(123.2)(0.0774)=8.29\times10^{4}.
$$

With $g_{m1}=0$ the output sees $R_3=3202\ \Omega$, and shorting the output kills the return:

$$
Z_{out}=\frac{3202\ \Omega}{1+8.29\times10^{4}}=38.6\ \mathrm{m\Omega}.
$$

The source resistance reduces the return ratio by about a factor of 5, raising the output resistance from 8.7 mΩ to about 39 mΩ.
