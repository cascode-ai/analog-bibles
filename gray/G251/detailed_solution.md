# Detailed solution - G251

The feedback resistor $R_F$ senses the output voltage (shunt at the output) and returns a current to the inverting input (shunt at the input), so the amplifier is a shunt–shunt (transresistance) feedback amplifier. Represent $R_F$ by its $y$-parameters, absorb $y_{11f}$ and $y_{22f}$ into the basic amplifier, and use $y_{12f}$ as the feedback factor.

### Step 1 — Feedback network

For a single series resistor $R_F$ between the two ports, the short-circuit $y$-parameters are

$$
y_{11f}=y_{22f}=\frac1{R_F},\qquad y_{12f}=-\frac1{R_F}.
$$

The feedback factor is the current returned to the input per volt of output, $f=y_{12f}=-1/R_F=-10^{-5}$ S. The loading terms $y_{11f}$ and $y_{22f}$ place $R_F$ from the input node to ground and from the output node to ground.

### Step 2 — Basic amplifier with loading

At the input, $R_F$ appears in parallel with $R_i$ (the current source $i_i$ has infinite resistance):

$$
z_{ia}=R_F\parallel R_i=100\ \mathrm{k\Omega}\parallel500\ \mathrm{k\Omega}=83.3\ \mathrm{k\Omega}.
$$

At the output, the op amp's controlled source drives $R_o$ into $R=R_F\parallel R_L=13.04\ \mathrm{k\Omega}$. A current $i$ into the input node produces $v_-=iz_{ia}$, so $v_+-v_-=-iz_{ia}$, and the output divider gives

$$
a=\frac{v_o}{i}=-z_{ia}\,a_v\,\frac{R}{R+R_o}=-(83.3\ \mathrm{k\Omega})(75{,}000)\frac{13.04\ \mathrm{k\Omega}}{13.24\ \mathrm{k\Omega}}=-6.16\times10^{9}\ \Omega .
$$

The loaded output resistance is $z_{oa}=R_o\parallel R_F\parallel R_L=197.0\ \Omega$.

### Step 3 — Loop transmission and closed-loop transresistance

$$
T=af=(-6.156\times10^{9}\ \Omega)(-10^{-5}\ \mathrm S)=6.16\times10^{4}.
$$

$T$ is positive, confirming negative feedback. The closed-loop gain is

$$
\frac{v_o}{i_i}=A=\frac{a}{1+T}=\frac{-6.156\times10^{9}\ \Omega}{61{,}557}=-99{,}998\ \Omega\approx-100\ \mathrm{k\Omega},
$$

which differs from the ideal $1/f=-R_F$ by only $1/(1+T)\approx16$ ppm.

### Step 4 — Input and output resistances

Shunt connections at both ports divide the loaded impedances by $1+T$:

$$
R_{in}=\frac{z_{ia}}{1+T}=\frac{83.3\ \mathrm{k\Omega}}{61{,}557}=1.35\ \Omega,\qquad
R_{out}=\frac{z_{oa}}{1+T}=\frac{197.0\ \Omega}{61{,}557}=3.20\ \mathrm{m\Omega}.
$$

The inverting input is therefore a near-perfect virtual ground for the signal current, and the output behaves almost as an ideal voltage source. These are the resistances seen looking into the feedback amplifier; the output resistance already includes $R_L$.
