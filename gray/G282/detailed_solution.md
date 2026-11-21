# Detailed solution - G282

The output voltage is sampled across the divider and a voltage $R_1v_o/(R_1+R_2)$ is returned in series with the input loop, so the feedback is series-shunt and the $h$-parameters of the $R_1$–$R_2$ network are the natural description. Absorb the feedback network's loading ($h_{11f}$, $h_{22f}$) into a basic amplifier $a$, take $f=h_{12f}$, and apply the series-shunt formulas.

### Step 1 — $h$-parameters of the feedback network

The feedback network is a two-port with port 1 between the inverting input and ground and port 2 between the output and ground. Its $h$-parameters, $v_1=h_{11}i_1+h_{12}v_2$ and $i_2=h_{21}i_1+h_{22}v_2$, are found by shorting port 2 or opening port 1:
$$
\begin{aligned}
h_{11f}&=\left.\frac{v_1}{i_1}\right|_{v_2=0}=R_1\|R_2=833.3\ \Omega,\\
h_{12f}&=\left.\frac{v_1}{v_2}\right|_{i_1=0}=\frac{R_1}{R_1+R_2}=\frac16,\\
h_{22f}&=\left.\frac{i_2}{v_2}\right|_{i_1=0}=\frac{1}{R_1+R_2}=\frac{1}{6\ \mathrm{k\Omega}}.
\end{aligned}
$$
The feedback factor is $f=h_{12f}=1/6$; the forward transmission $h_{21f}$ through the resistors is neglected against the op amp's.

### Step 2 — Basic amplifier with loading

The basic amplifier is the op amp with $h_{11f}$ placed in series with its input loop and $h_{22f}$ (6 kΩ) placed across its output. The input voltage divides between $R_i$ and $h_{11f}$, and the controlled source $a_vv_x$ drives 6 kΩ through $R_o$:
$$
\begin{aligned}
v_x&=v_i\frac{R_i}{R_i+h_{11f}}=v_i\frac{1\ \mathrm{M\Omega}}{1.000833\ \mathrm{M\Omega}}=0.99917\,v_i,\\
v_o&=a_vv_x\frac{R_1+R_2}{R_1+R_2+R_o}=a_vv_x\frac{6\ \mathrm{k\Omega}}{6.1\ \mathrm{k\Omega}}=0.98361\,a_vv_x .
\end{aligned}
$$
Hence
$$
a=\frac{v_o}{v_i}=10^4\times0.99917\times0.98361=9828 .
$$

### Step 3 — Loop transmission and closed-loop gain

The loop gain is
$$
T=af=\frac{9828}{6}=1638 ,
$$
and the closed-loop gain of the series-shunt configuration is
$$
\frac{v_o}{v_i}=\frac{a}{1+T}=\frac{9828}{1639}=5.9963 .
$$
This is $1/f=6$ reduced by the factor $T/(1+T)$, i.e. a 0.06% gain error.

### Step 4 — Input resistance

Series feedback at the input raises the resistance of the basic amplifier's input loop by $1+T$. That loop consists of $R_i$ in series with $h_{11f}$:
$$
R_{in}=(R_i+h_{11f})(1+T)=(1.000833\ \mathrm{M\Omega})(1639)=1.64\ \mathrm{G\Omega}.
$$

### Step 5 — Output resistance

Shunt sampling at the output lowers the basic amplifier's output resistance by $1+T$. With $v_i=0$, the basic amplifier's output resistance is $R_o$ in parallel with $1/h_{22f}$:
$$
R_{out}=\frac{R_o\|(R_1+R_2)}{1+T}=\frac{100\ \Omega\|6\ \mathrm{k\Omega}}{1639}=\frac{98.36\ \Omega}{1639}=0.060\ \Omega .
$$

A direct nodal solution of the full circuit gives the same $v_o/v_i=5.9963$ and $R_{in}=1.640\ \mathrm{G\Omega}$, confirming that the neglected $h_{21f}$ has no visible effect. Results: $T\approx1638$, $v_o/v_i\approx5.996$, $R_{in}\approx1.64\ \mathrm{G\Omega}$, $R_{out}\approx0.060\ \Omega$.
