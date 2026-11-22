# Detailed solution - G252

Take the op amp's controlled source $a_v(v_+-v_-)$ as the reference element. With $v_+=0$ it equals $-a_vv_-$. Compute the return ratio $\mathcal R$ for that source, the asymptotic gain $A_\infty$ (source made infinite) and the direct feedthrough $d$ (source set to zero), then combine them; impedances follow from Blackman's formula.

### Step 1 — Return ratio

Set $i_i=0$ (an ideal current source is an open circuit when zeroed), break the loop at the controlled source and drive the output branch with a test voltage $v_t$ in place of $a_v(\cdot)$. Through $R_o$, $v_t$ drives $R_L$ in parallel with the path $R_F+R_i$ to ground:

$$
R_L\parallel(R_F+R_i)=15\ \mathrm{k\Omega}\parallel600\ \mathrm{k\Omega}=14.63\ \mathrm{k\Omega},\qquad
v_o=v_t\,\frac{14.63\ \mathrm{k\Omega}}{14.63\ \mathrm{k\Omega}+0.2\ \mathrm{k\Omega}}=0.9865\,v_t .
$$

$R_F$ and $R_i$ divide $v_o$ down to the inverting input, $v_-=v_o\,R_i/(R_i+R_F)=0.8333\,v_o$. The returned source value is $-a_vv_-$, so

$$
\mathcal R=-\frac{-a_vv_-}{v_t}=a_v(0.9865)(0.8333)=61{,}657 .
$$

### Step 2 — Asymptotic gain and direct feedthrough

As $a_v\to\infty$, a finite output requires $v_-\to0$: the inverting input is a virtual ground, no current flows in $R_i$, and all of $i_i$ flows through $R_F$ toward the output. Hence

$$
A_\infty=\frac{v_o}{i_i}\bigg|_{a_v\to\infty}=-R_F=-100\ \mathrm{k\Omega}.
$$

With $a_v=0$, the output is passive: $i_i$ sees $R_i$ in parallel with $R_F+R_o\parallel R_L$ ($R_o\parallel R_L=197.4\ \Omega$), and $R_F$ forms a divider into $R_o\parallel R_L$:

$$
v_-=i_i\,[R_i\parallel(R_F+R_o\parallel R_L)]=(83.47\ \mathrm{k\Omega})\,i_i,\qquad
d=\frac{v_o}{i_i}=83.47\ \mathrm{k\Omega}\cdot\frac{197.4\ \Omega}{100.2\ \mathrm{k\Omega}}=+164\ \Omega .
$$

### Step 3 — Closed-loop transresistance

$$
\frac{v_o}{i_i}=A_\infty\frac{\mathcal R}{1+\mathcal R}+\frac{d}{1+\mathcal R}
=(-100\ \mathrm{k\Omega})\frac{61{,}657}{61{,}658}+\frac{164\ \Omega}{61{,}658}=-99{,}998\ \Omega\approx-100\ \mathrm{k\Omega}.
$$

The feedthrough term is only 2.7 mΩ and is negligible. The loop transmission is $\mathcal R=6.17\times10^{4}$.

### Step 4 — Input resistance (Blackman)

With $a_v=0$, $R_{in}(a_v{=}0)=R_i\parallel(R_F+R_o\parallel R_L)=83.47\ \mathrm{k\Omega}$. Shorting the input port forces $v_-=0$, so $\mathcal R(\text{short})=0$; with the input port open (the driving current source removed), the return ratio is the one found in Step 1, 61,657:

$$
R_{in}=R_{in}(a_v{=}0)\,\frac{1+0}{1+61{,}657}=\frac{83.47\ \mathrm{k\Omega}}{61{,}658}=1.354\ \Omega .
$$

### Step 5 — Output resistance (Blackman)

With $a_v=0$, the output sees $R_o$, $R_L$ and $R_F+R_i$ in parallel:

$$
R_{out}(a_v{=}0)=R_o\parallel R_L\parallel(R_F+R_i)=197.3\ \Omega .
$$

Shorting the output port makes $v_o=0$ and hence $v_-=0$, so $\mathcal R(\text{short})=0$; with the output port open ($R_L$ kept as part of the circuit), $\mathcal R(\text{open})=61{,}657$. Therefore

$$
R_{out}=\frac{197.3\ \Omega}{61{,}658}=3.20\ \mathrm{m\Omega}.
$$

All four results agree with a direct nodal solution of the circuit.
