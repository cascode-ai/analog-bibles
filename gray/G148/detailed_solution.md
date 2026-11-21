# Detailed solution - G148

Write the closed-loop gain with a finite open-loop gain $a$, express the relative deviation from the ideal resistor ratio, and require it to be at most 0.1 % at the worst corner of the gain tolerance, which is the lowest open-loop gain.

### Step 1 — Closed-loop gain with finite $a$

Let $R_1=1\ \mathrm{k\Omega}$ and $R_2=1\ \mathrm{M\Omega}$, and let $V_{top}$ and $V_{bot}$ be the voltages of the upper and lower input terminals, so $v_{in}=V_{top}-V_{bot}$. The op amp draws no input current, so each input is set by a divider (superposition at the inverting input):

$$
V_+=V_{bot}\frac{R_2}{R_1+R_2},\qquad V_-=V_{top}\frac{R_2}{R_1+R_2}+V_o\frac{R_1}{R_1+R_2}.
$$

With $V_o=a(V_+-V_-)$ and $f=R_1/(R_1+R_2)$, the feedback factor,

$$
V_o\left(1+af\right)=-a\frac{R_2}{R_1+R_2}v_{in}\ \Rightarrow\
V_o=-\frac{R_2}{R_1}v_{in}\cdot\frac{1}{1+\dfrac{1}{af}} .
$$

### Step 2 — Gain error

The ideal gain magnitude is $R_2/R_1=1000$. The relative error is

$$
\epsilon=1-\frac{1}{1+1/(af)}=\frac{1}{1+af},\qquad \frac1f=\frac{R_1+R_2}{R_1}=1001,
$$

so $\epsilon\approx1001/a$. Note that the noise gain is $1/f=1001$, not the signal gain of 1000.

### Step 3 — Required open-loop gain

$$
\epsilon\le10^{-3}\ \Rightarrow\ af\ge999\ \Rightarrow\ a\ge999\times1001=1.0\times10^{6}.
$$

The error grows as $a$ falls, so this bound must hold at the low end of the tolerance, $a_{\min}=0.5\,a_{nom}$ (the +100 % end only reduces the error):

$$
a_{nom}\ge\frac{1.0\times10^6}{0.5}=2.0\times10^{6}.
$$

The op amp must have a nominal open-loop gain of at least about $2\times10^6$ (126 dB), so that its lowest value of about $10^6$ still keeps the gain within 0.1 % of 1000.
