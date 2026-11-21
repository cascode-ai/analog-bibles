# Detailed solution - G285

Resistor $R_2$ senses the output voltage and returns a current to the inverting-input node, where it adds to the input current $I_i$. This is shunt-shunt feedback, so the op amp and $R_2$ are two two-ports connected in parallel at both ports and described by $y$-parameters. The feedback network's $y_{11f}$ and $y_{22f}$ are absorbed into a transresistance basic amplifier $a=v_o/i_i$, $f=y_{12f}$, and $T=af$.

### Step 1 — $y$-parameters of the feedback network

Port 1 of the feedback network is the inverting-input node to ground, port 2 the output to ground, and the network is $R_2$ alone. With $i_1=y_{11}v_1+y_{12}v_2$ and $i_2=y_{21}v_1+y_{22}v_2$, shorting the opposite port gives
$$
y_{11f}=y_{22f}=\frac1{R_2}=10\ \mu\mathrm S,\qquad
f=y_{12f}=\left.\frac{i_1}{v_2}\right|_{v_1=0}=-\frac1{R_2}=-10^{-5}\ \mathrm S .
$$
The feed-forward term $y_{21f}=-1/R_2$ is neglected in the standard unilateral split; Step 3 checks it.

### Step 2 — Loaded basic amplifier $a$

The basic amplifier is the op amp with $1/y_{11f}=R_2$ across its input and $1/y_{22f}=R_2$ across its output; $R_1$ belongs to the input side. All of $I_i$ flows into the parallel combination at the inverting node:
$$
R_1\|R_2\|R_i=200\ \mathrm{k\Omega}\|100\ \mathrm{k\Omega}\|50\ \mathrm{k\Omega}=28.57\ \mathrm{k\Omega},
\qquad v_-=i_i(28.57\ \mathrm{k\Omega}).
$$
The non-inverting input is grounded, so $v_x=-v_-$. The source $a_vv_x$ drives $R_2$ through $R_o$:
$$
v_o=a_vv_x\frac{R_2}{R_2+R_o}=a_vv_x\frac{100\ \mathrm{k\Omega}}{1.1\ \mathrm{M\Omega}}=0.0909\,a_vv_x .
$$
Combining,
$$
a=\frac{v_o}{i_i}=-(28.57\ \mathrm{k\Omega})(1000)(0.0909)=-2.597\ \mathrm{M\Omega}.
$$

### Step 3 — Loop gain

$$
T=af=(-2.597\ \mathrm{M\Omega})(-10^{-5}\ \mathrm S)=25.97\approx26.0 .
$$
The closed-loop transresistance is $a/(1+T)=-96.3\ \mathrm{k\Omega}$, close to the ideal $1/f=-R_2=-100\ \mathrm{k\Omega}$; a direct nodal solution of the full circuit gives $-96.26\ \mathrm{k\Omega}$.

To check the neglected feed-forward, compare the forward admittances. The op amp's is $y_{21a}=\left.i_2/v_1\right|_{v_2=0}=a_v/R_o=1\ \mathrm{mS}$, and the network's is $y_{21f}=-10\ \mu\mathrm S$. Keeping both scales the forward term by $0.99$, giving $T=25.7$, within about 1% of the unilateral value.

The return ratio of $a_v$ is a different quantity. With $I_i$ opened and all loading kept, it is $a_v(R_1\|R_i)/(R_o+R_2+R_1\|R_i)=35.1$; in $y$-parameter form it contains the product $y_{12f}y_{21f}$ in its denominator, which the two-port split drops. The requested $y$-parameter loop gain is $T=af\approx26.0$, with $a=-2.60\ \mathrm{M\Omega}$ and $f=-10^{-5}$ S.
