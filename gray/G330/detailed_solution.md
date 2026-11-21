# Detailed solution - G330

Find the return ratio as in any controlled-source loop: turn off the input, replace $a_v(s)v_x$ with an independent source, and compute the returned $v_x$. For stability, write $a_v(s)$ as a two-pole function with positive coefficients, form the closed-loop characteristic polynomial, and show with the Routh–Hurwitz test that all its roots lie in the left half-plane for every $R,C>0$. A phase argument on the Nyquist plot gives the same result.

### Step 1 — Return ratio

Set $V_i=0$, so $R$ goes to ground. Drive the output with an independent source $a_v(s)v_t$. $C$ and $R$ form a divider from the output to ground, so the node joining them is at
$$
v_{\text{node}}=a_v(s)v_t\,\frac{R}{R+1/(sC)} .
$$
$v_x$ has its + terminal at ground, so $v_x=-v_{\text{node}}$, and
$$
\mathscr{R}(s)=-\frac{v_x}{v_t}=a_v(s)\,\frac{R}{R+1/(sC)}=a_v(s)\,\frac{sRC}{1+sRC} .
$$

### Step 2 — Model of $a_v(s)$

With two left-half-plane poles, real or complex, no finite zeros, and $a_v(0)=a_0>0$:
$$
a_v(s)=\frac{a_0}{1+b_1s+b_2s^2},\qquad a_0>0,\ b_1>0,\ b_2>0 .
$$
A quadratic with both roots in the left half-plane has all coefficients of the same sign. This no-zero form is the intended model: a right-half-plane zero in $a_v$ can break the result. For example, $a_v=10(1-s)/[(s+1)(s+2)]$ with $RC=100$ gives closed-loop poles at $+3.92$ and $+3.07$.

### Step 3 — Closed-loop characteristic polynomial

The closed-loop poles are the zeros of $1+\mathscr{R}$. Multiplying by $(1+sRC)(1+b_1s+b_2s^2)$:
$$
\begin{aligned}
(1+sRC)(1+b_1s+b_2s^2)+a_0sRC
&=RCb_2\,s^3+(b_2+RCb_1)\,s^2+\left(b_1+RC+a_0RC\right)s+1 .
\end{aligned}
$$

### Step 4 — Routh–Hurwitz test

A cubic $c_3s^3+c_2s^2+c_1s+c_0$ has all roots in the left half-plane if and only if all $c_i>0$ and $c_2c_1>c_3c_0$.

- All four coefficients are positive, since $R$, $C$, $a_0$, $b_1$ and $b_2$ are all positive.
- The second condition reads
$$
(b_2+RCb_1)\left[b_1+RC(1+a_0)\right]>RCb_2 .
$$
Expanding, the left side contains the term $b_2RC(1+a_0)$, which already exceeds $RCb_2$ because $a_0>0$, and every other term is positive.

So the condition holds for every $R$ and $C$, and the closed loop is always stable.

### Step 5 — Equivalent phase argument

On the $j\omega$ axis, the phase of $j\omega RC/(1+j\omega RC)$ is $90^\circ-\tan^{-1}\omega RC$, which lies in $(0^\circ,90^\circ]$. The phase of a two-pole $a_v(j\omega)$ with LHP poles lies in $(-180^\circ,0^\circ]$ for finite $\omega$. Their sum, the phase of $\mathscr{R}(j\omega)$, therefore stays strictly above $-180^\circ$. The Nyquist plot never crosses the negative real axis and cannot encircle $-1$. The integrator's $s$ factor contributes phase lead, which offsets the lag of the amplifier's two poles.
