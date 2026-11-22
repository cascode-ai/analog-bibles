# Detailed solution - A376

Express each input step as a multiple $k$ of the resolution. In the linear two-pole response the output reaches half of the swing $V_{OH}-V_{OL}=A_v(0)V_{in}(\min)$ when the normalized step response equals $1/(2k)$. Solve this exactly for the given pole ratio, and compare with the small-time parabolic approximation.

### Step 1 — Overdrive factors

$$
k=\frac{V_{in}}{V_{in}(\min)}:\qquad \frac{10\ \mathrm{mV}}{0.642\ \mathrm{mV}}=15.58,\qquad 155.8,\qquad 1558 .
$$

The delay condition is

$$
A_v(0)V_{in}\,y(t_p)=\frac{A_v(0)V_{in}(\min)}2\quad\Rightarrow\quad y(t_p)=\frac1{2k},
$$

where $y(t)$ is the unit step response of the two-pole system.

### Step 2 — Exact two-pole response

With poles $p_1=-5\times10^6$ rad/s and $p_2=2p_1$, normalize time as $t_n=|p_1|t$. The step response of $1/[(1+s/|p_1|)(1+s/|p_2|)]$ is

$$
y=1-\frac{|p_2|e^{-|p_1|t}-|p_1|e^{-|p_2|t}}{|p_2|-|p_1|}=1-2e^{-t_n}+e^{-2t_n}=\bigl(1-e^{-t_n}\bigr)^2 .
$$

Setting it equal to $1/(2k)$:

$$
1-e^{-t_n}=\frac1{\sqrt{2k}},\qquad t_n=-\ln\Bigl(1-\frac1{\sqrt{2k}}\Bigr),\qquad t_p=\frac{t_n}{|p_1|}.
$$

For 10 mV: $t_n=-\ln(1-1/\sqrt{31.15})=0.197$, so $t_p=0.197/(5\times10^6\ \mathrm{s^{-1}})=39.5$ ns.

### Step 3 — Parabolic approximation

For small $t$ the two-pole response starts as $y\approx|p_1p_2|t^2/2$, so

$$
t_p\approx\frac1{\sqrt{k\,|p_1p_2|}},\qquad |p_1p_2|=5\times10^{13}\ \mathrm{s^{-2}} .
$$

For 10 mV this gives $1/\sqrt{(15.58)(5\times10^{13})}=35.8$ ns, slightly shorter than the exact value; the approximation improves as $k$ grows.

### Step 4 — Results

| $V_{in}$ | $k$ | $t_p$ exact | $t_p$ parabolic |
|---|---|---|---|
| 10 mV | 15.58 | 39.5 ns | 35.8 ns |
| 100 mV | 155.8 | 11.7 ns | 11.3 ns |
| 1 V | 1558 | 3.62 ns | 3.58 ns |

The delay falls roughly as $1/\sqrt{k}$. These values assume a linear response; for the larger inputs a real comparator would probably be slew-rate limited (and with 1 V the input stage is fully switched), so the 100 mV and 1 V delays are lower bounds.
