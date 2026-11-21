# Detailed solution - A036

This is the same voltage-dependent divider as with an n-well resistor, but the n⁺ diffusion has a voltage coefficient a hundred times smaller. Write the divider relation, substitute $R_1(v_{out})$, solve the resulting quadratic, and compare with the ideal 1.25 V.

### Step 1 — Divider equation

With no load, $v_{out}(R_1+R_2)=v_{in}R_2$. The voltage coefficient is $K=200\ \mathrm{ppm/V}=2\times10^{-4}\ \mathrm{V^{-1}}$, so

$$
R_1=R_{nom}\left[1+2\times10^{-4}\ \mathrm{V^{-1}}\cdot\frac{2.5\ \mathrm V+v_{out}}{2}\right]=R_{nom}\left[1+10^{-4}\ \mathrm{V^{-1}}(2.5\ \mathrm V+v_{out})\right].
$$

### Step 2 — Quadratic in $v_{out}$

With $R_{nom}=R_2=10$ kΩ, dividing by 10 kΩ (voltages in volts):

$$
v_{out}\left[1+10^{-4}(2.5+v_{out})+1\right]=2.5
\quad\Rightarrow\quad
10^{-4}\,v_{out}^2+2.00025\,v_{out}-2.5=0 .
$$

The positive root is

$$
v_{out}=\frac{-2.00025+\sqrt{2.00025^2+4(10^{-4})(2.5)}}{2(10^{-4})}=1.24977\ \mathrm V .
$$

Because the quadratic term is tiny, the root is very close to $2.5/2.00025$; it is safer numerically to iterate $v_{out}=2.5/[2+10^{-4}(2.5+v_{out})]$ from 1.25 V, which converges to the same value in one step.

### Step 3 — Check and comparison

$$
R_1=10\ \mathrm{k\Omega}\left[1+10^{-4}(2.5+1.24977)\right]=10.0037\ \mathrm{k\Omega},\qquad
v_{out}=\frac{(2.5\ \mathrm V)(10\ \mathrm{k\Omega})}{20.0037\ \mathrm{k\Omega}}=1.24977\ \mathrm V .
$$

The output is only about 0.23 mV below the ideal 1.25 V, about one hundredth of the 23 mV error that an n-well resistor with 20,000 ppm/V produces in the same circuit. The error scales with the voltage coefficient, which is why heavily doped diffusion or polysilicon resistors are preferred over well resistors where linearity matters.
