# Detailed solution - A167

M1, M2 and M3 are in series, so they carry one current, and that current is fixed by M3, the only saturated device. M1 and M2, both in deep nonsaturation, then behave as two series channel resistances; each one's drain–source voltage is the current times its resistance, and $v_{OUT}$ is their sum.

### Step 1 — The series current

M3 is saturated with $v_{SG3}=V_{DD}-V_{GG3}$, so with λ neglected its current depends only on fixed voltages:

$$
I=i_{D3}=\frac{\beta_3}2(V_{DD}-V_{GG3}-|V_{T3}|)^2 .
$$

KCL along the stack (no other branch connects to the output or to the M1–M2 node) gives $i_{D1}=i_{D2}=I$.

### Step 2 — Drain–source voltage of M1

M1 has $v_{GS1}=V_{DD}$ and a small $v_{DS1}$, so the quadratic term of the nonsaturation current is dropped:

$$
I\cong\beta_1(V_{DD}-V_{T1})v_{DS1}
\quad\Rightarrow\quad
v_{DS1}=\frac{I}{\beta_1(V_{DD}-V_{T1})}.
$$

### Step 3 — Drain–source voltage of M2

M2's source is at $v_{DS1}$, so $v_{GS2}=V_{GG2}-v_{DS1}$ and $v_{DS2}=v_{OUT}-v_{DS1}$. Following the hint, $V_{GG2}-V_{T2}\gg v_{DS1}$, so $v_{DS1}$ is dropped from the gate drive, and the small $v_{DS2}$ lets the quadratic term go as well:

$$
I\cong\beta_2(V_{GG2}-V_{T2})v_{DS2}
\quad\Rightarrow\quad
v_{DS2}=\frac{I}{\beta_2(V_{GG2}-V_{T2})}.
$$

### Step 4 — Sum and substitution

The output is the voltage across both devices:

$$
v_{OUT}(\min)=v_{DS1}+v_{DS2}=I\left[\frac1{\beta_1(V_{DD}-V_{T1})}+\frac1{\beta_2(V_{GG2}-V_{T2})}\right].
$$

With $\beta_1=\beta_2$ the factor $1/\beta_2$ comes out of the bracket, and substituting $I$ from Step 1:

$$
v_{OUT}(\min)=\frac{\beta_3}{2\beta_2}(V_{DD}-V_{GG3}-|V_{T3}|)^2\left(\frac1{V_{GG2}-V_{T2}}+\frac1{V_{DD}-V_{T1}}\right),
$$

which is the stated result. Each term in the parentheses is $\beta$ times the channel resistance $1/[\beta(V_{GS}-V_T)]$ of one triode device, so $v_{OUT}(\min)$ is small when M1 and M2 are wide compared with M3 and when their gate drives are large.
