# Detailed solution - G283

Take the op-amp source $a_v(v_+-v_-)$ as the reference controlled source. The gain follows from $\mathcal R$, $A_\infty$ and $d$; each port resistance follows from Blackman's formula $R_{port}=R_{port}(a_v{=}0)\,(1+\mathcal R_{sc})/(1+\mathcal R_{oc})$, where $\mathcal R_{sc}$ and $\mathcal R_{oc}$ are the return ratios with that port shorted and opened. No two-port approximation is involved, so the results are exact for this model.

### Step 1 — Return ratio $\mathcal R$

Set $v_i=0$, so the non-inverting input is grounded and $R_i$ appears from the inverting input $v_-$ to ground, in parallel with $R_1$:
$$
R_1\|R_i=1\ \mathrm{k\Omega}\|1\ \mathrm{M\Omega}=999.0\ \Omega .
$$
Replace the source by a test voltage $v_t$. It drives $R_o$ and $R_2$ in series into $R_1\|R_i$, a voltage divider:
$$
v_-=v_t\frac{R_1\|R_i}{R_o+R_2+R_1\|R_i}=v_t\frac{999.0\ \Omega}{6099\ \Omega}=0.16380\,v_t .
$$
The controlling voltage is $v_x=v_+-v_-=-v_-$, so the returned signal is $v_r=a_vv_x=-a_v(0.16380)v_t$ and
$$
\mathcal R=-\frac{v_r}{v_t}=a_v\frac{R_1\|R_i}{R_o+R_2+R_1\|R_i}=10^4\times0.16380=1638 .
$$

### Step 2 — $A_\infty$, $d$ and the closed-loop gain

As $a_v\to\infty$ the loop drives $v_x\to0$, so $v_-=v_i$ and no current flows in $R_i$; the divider then sets $v_o=v_i(R_1+R_2)/R_1$:
$$
A_\infty=1+\frac{R_2}{R_1}=6 .
$$
With $a_v=0$ the op-amp output is $R_o$ to ground. The input reaches $v_-$ through $R_i$ into $R_1\|(R_2+R_o)=836.1\ \Omega$, and $v_o$ is $v_-$ divided by $R_o/(R_o+R_2)$:
$$
d=\frac{836.1\ \Omega}{1\ \mathrm{M\Omega}+836.1\ \Omega}\cdot\frac{100\ \Omega}{5.1\ \mathrm{k\Omega}}=1.64\times10^{-5}.
$$
Then
$$
\frac{v_o}{v_i}=A_\infty\frac{\mathcal R}{1+\mathcal R}+\frac{d}{1+\mathcal R}=6\times\frac{1638}{1639}+\frac{1.64\times10^{-5}}{1639}=5.9963 ,
$$
where the feedthrough term ($10^{-8}$) is negligible.

### Step 3 — Input resistance

- With $a_v=0$, the input source sees $R_i$ in series with the network at $v_-$: $R_{in}(a_v{=}0)=R_i+R_1\|(R_2+R_o)=1.00084\ \mathrm{M\Omega}$.
- Input port shorted ($v_+$ grounded): this is the circuit of Step 1, so $\mathcal R_{sc}=1638$.
- Input port open: no current flows in $R_i$, so $v_x=0$ whatever $v_t$ is, and $\mathcal R_{oc}=0$.

$$
R_{in}=R_{in}(a_v{=}0)(1+\mathcal R)=(1.00084\ \mathrm{M\Omega})(1639)=1.64\ \mathrm{G\Omega}.
$$

### Step 4 — Output resistance

- With $a_v=0$ and $v_i=0$, the output node sees $R_o$ to ground in parallel with $R_2$ followed by $R_1\|R_i$: $R_{out}(a_v{=}0)=R_o\|(R_2+R_1\|R_i)=100\ \Omega\|5999\ \Omega=98.36\ \Omega$.
- Output shorted: $v_o=0$ forces $v_-=0$ and $v_x=0$, so $\mathcal R_{sc}=0$.
- Output open: this is the normal circuit of Step 1, so $\mathcal R_{oc}=1638$.

$$
R_{out}=\frac{R_{out}(a_v{=}0)}{1+\mathcal R}=\frac{98.36\ \Omega}{1639}=0.060\ \Omega .
$$

Results: $\mathcal R\approx1638$, $v_o/v_i\approx5.996$, $R_{in}\approx1.64\ \mathrm{G\Omega}$, $R_{out}\approx0.060\ \Omega$, identical to a direct nodal solution of the circuit.
