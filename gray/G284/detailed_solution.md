# Detailed solution - G284

The circuit samples the output voltage and returns a voltage in series with the input loop, so the op amp and the $R_1$–$R_2$ divider are modeled as two two-ports connected series-shunt and described by $h$-parameters. The feedback network's $h_{11f}$ and $h_{22f}$ are absorbed into the basic amplifier $a$, $f=h_{12f}$, and $T=af$.

### Step 1 — $h$-parameters of the feedback network

Port 1 of the feedback network is between the inverting input and ground, port 2 between the output and ground. With $v_1=h_{11}i_1+h_{12}v_2$ and $i_2=h_{21}i_1+h_{22}v_2$:
$$
\begin{aligned}
h_{11f}&=\left.\frac{v_1}{i_1}\right|_{v_2=0}=R_1\|R_2=200\ \mathrm{k\Omega}\|100\ \mathrm{k\Omega}=66.7\ \mathrm{k\Omega},\\
h_{12f}&=\left.\frac{v_1}{v_2}\right|_{i_1=0}=\frac{R_1}{R_1+R_2}=\frac23,\\
h_{22f}^{-1}&=\left.\frac{v_2}{i_2}\right|_{i_1=0}=R_1+R_2=300\ \mathrm{k\Omega}.
\end{aligned}
$$
So $f=h_{12f}=2/3$. In the standard unilateral split, the network's feed-forward term $h_{21f}=-R_1/(R_1+R_2)=-2/3$ is neglected against the op amp's forward term; this is checked in Step 3.

### Step 2 — Loaded basic amplifier $a$

The basic amplifier is the op amp with $h_{11f}$ in series with its input loop and $1/h_{22f}$ across its output. The input divides between $R_i$ and $h_{11f}$, and the controlled source drives 300 kΩ through $R_o$:
$$
\begin{aligned}
v_x&=v_i\frac{R_i}{R_i+h_{11f}}=v_i\frac{50\ \mathrm{k\Omega}}{116.7\ \mathrm{k\Omega}}=0.4286\,v_i,\\
v_o&=a_vv_x\frac{R_1+R_2}{R_1+R_2+R_o}=a_vv_x\frac{300\ \mathrm{k\Omega}}{1.3\ \mathrm{M\Omega}}=0.2308\,a_vv_x .
\end{aligned}
$$
Both loadings are severe here, because $R_i$ is comparable to $h_{11f}$ and $R_o$ exceeds $R_1+R_2$:
$$
a=\frac{v_o}{v_i}=1000\times0.4286\times0.2308=98.9 .
$$

### Step 3 — Loop gain

$$
T=af=98.9\times\frac23=65.9 .
$$
The corresponding closed-loop gain is $a/(1+T)=1.478$, against the ideal $1/f=1.5$.

To check the neglected feed-forward, compare $h_{21}$ terms. The op amp's is $h_{21a}=\left.i_2/i_1\right|_{v_2=0}=-a_vR_i/R_o=-50$, while the network's is $-2/3$. Keeping both scales the forward term by $50.67/50$, giving $T=66.8$; the unilateral value 65.9 is accurate to about 1%.

The return ratio of the source $a_v$ is a different quantity. With $v_i=0$ and all loading kept it is $a_v(R_1\|R_i)/(R_o+R_2+R_1\|R_i)=1000\times40\ \mathrm{k\Omega}/1.14\ \mathrm{M\Omega}=35.1$. It differs from the two-port $af$ because the two-port split evaluates $h_{11f}$ with the output shorted and $h_{22f}$ with the input open, rather than with the actual terminations. The requested $h$-parameter loop gain is $T=af\approx65.9$, with $a=98.9$ and $f=2/3$.
