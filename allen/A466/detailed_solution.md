# Detailed solution - A466

Use the two step types of the subranging DAC, inside a group and at a group transition, to write the DNL as a function of $x$, then find where the worst-case DNL magnitude reaches 2 LSB and take the smallest such $x$.

### Step 1 — Output and step sizes

With $1\,\mathrm{LSB}=V_{REF}/64$ and the code $k=8m+n$ ($m,n=0\ldots7$), the MSB subDAC contributes $8m$ LSB and the LSB subDAC $(n/8)(V_{REF}/x)=8n/x$ LSB:

$$
v_{OUT}=8m+\frac{8n}{x}\ \mathrm{LSB}.
$$

$$
\begin{aligned}
\text{inside a group }(n\to n+1):&\quad \mathrm{DNL}_g=\frac8x-1,\\
\text{group transition }(n=7\to0,\ m\to m+1):&\quad \text{step}=8-\frac{56}{x},\quad \mathrm{DNL}_t=7-\frac{56}{x}.
\end{aligned}
$$

The DNL of the DAC is $\max\left(|\mathrm{DNL}_g|,|\mathrm{DNL}_t|\right)$.

### Step 2 — Solutions of $|\mathrm{DNL}|=2$ LSB

The transition DNL varies seven times faster with $1/x$ than the in-group DNL, so it reaches $\pm2$ first on both sides of $x=8$:

$$
7-\frac{56}{x}=-2\ \Longrightarrow\ x=\frac{56}{9}=6.22,\qquad
7-\frac{56}{x}=+2\ \Longrightarrow\ x=\frac{56}{5}=11.2 .
$$

At $x=56/9$ the in-group DNL is $8/6.22-1=+0.29$ LSB, so the worst case is indeed the transition: each step there is $8-9=-1$ LSB, i.e. the output falls by 1 LSB.

### Step 3 — Smallest $x$

For $x<56/9$ the transition DNL is more negative than $-2$ LSB, so the DNL magnitude exceeds 2 LSB; the smallest divisor at which the DNL equals 2 LSB is

$$
x=\frac{56}{9}\approx6.22 .
$$

The in-group DNL alone would reach $+2$ only at $x=8/3$, but there the transition DNL is $7-56/(8/3)=-14$ LSB, so that value does not correspond to a 2 LSB DNL of the DAC.
