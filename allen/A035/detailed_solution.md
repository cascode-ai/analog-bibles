# Detailed solution - A035

The circuit is a resistive divider, but $R_1$ depends on the output voltage it helps set, so the divider equation becomes a quadratic in $v_{out}$. Write the divider relation, substitute the voltage-dependent $R_1$, solve, and check by back-substitution.

### Step 1 — Divider equation with a voltage-dependent $R_1$

With no load on the output,

$$
v_{out}=v_{in}\frac{R_2}{R_1+R_2}\quad\Longleftrightarrow\quad v_{out}(R_1+R_2)=v_{in}R_2 .
$$

The voltage coefficient is $K=20{,}000\ \mathrm{ppm/V}=0.02\ \mathrm{V^{-1}}$, so

$$
R_1=R_{nom}\left[1+0.02\ \mathrm{V^{-1}}\cdot\frac{2.5\ \mathrm V+v_{out}}{2}\right]=R_{nom}\left[1+0.01\ \mathrm{V^{-1}}(2.5\ \mathrm V+v_{out})\right].
$$

### Step 2 — Quadratic in $v_{out}$

Since $R_{nom}=R_2=10$ kΩ, divide through by 10 kΩ (voltages in volts):

$$
v_{out}\left[1+0.01(2.5+v_{out})+1\right]=2.5
\quad\Rightarrow\quad
0.01\,v_{out}^2+2.025\,v_{out}-2.5=0 .
$$

Taking the positive root:

$$
v_{out}=\frac{-2.025+\sqrt{2.025^2+4(0.01)(2.5)}}{2(0.01)}=\frac{-2.025+\sqrt{4.2006}}{0.02}=1.2271\ \mathrm V .
$$

### Step 3 — Check and interpretation

Back-substitution gives

$$
R_1=10\ \mathrm{k\Omega}\left[1+0.01(2.5+1.2271)\right]=10.373\ \mathrm{k\Omega},\qquad
v_{out}=\frac{(2.5\ \mathrm V)(10\ \mathrm{k\Omega})}{10\ \mathrm{k\Omega}+10.373\ \mathrm{k\Omega}}=1.2271\ \mathrm V .
$$

The ideal divider would give 1.25 V; the n-well resistor, evaluated at its average terminal voltage of about 1.86 V, is 3.7 % above nominal and pulls the output about 23 mV low. A single fixed-point iteration, starting from $v_{out}=1.25$ V, already gives 1.2270 V, because the correction is small.
