# Detailed solution - G329

The return ratio with respect to the controlled source is found by turning off the input, replacing $a_vv_x$ with an independent source $a_vv_t$, and computing the $v_x$ that comes back: $\mathscr{R}=-v_x/v_t$. The closed-loop poles are the zeros of $1+\mathscr{R}$. For impedances built from one resistor or one capacitor each, that condition reduces to a first-order equation whose root, if there is one, is negative.

### Step 1 — Return ratio

Set $V_s=0$, so $Z_1$ goes to ground. Replace the controlled source with an independent source $a_vv_t$ that drives the output. $Z_2$ and $Z_1$ form a divider from the output to ground, so the voltage at the node joining them is
$$
v_{\text{node}}=a_vv_t\,\frac{Z_1}{Z_1+Z_2} .
$$
$v_x$ is defined with its + terminal at ground and its − terminal at that node, so $v_x=-v_{\text{node}}$. The returned variable is $v_r=v_x=-a_vv_t\,Z_1/(Z_1+Z_2)$, and
$$
\mathscr{R}=-\frac{v_r}{v_t}=a_v\,\frac{Z_1}{Z_1+Z_2} .
$$
$\mathscr{R}$ is positive at frequencies where the impedances are real, so the loop is negative feedback.

### Step 2 — Characteristic equation

The closed-loop poles are the zeros of
$$
1+\mathscr{R}=\frac{(1+a_v)Z_1+Z_2}{Z_1+Z_2}
\quad\Rightarrow\quad (1+a_v)Z_1+Z_2=0
$$
(where $Z_1+Z_2$ is finite). With $a_v>0$, the factor $1+a_v$ is a positive real constant.

### Step 3 — The four R/C combinations

| $Z_1$ | $Z_2$ | $(1+a_v)Z_1+Z_2=0$ | Closed-loop pole |
|---|---|---|---|
| $R_1$ | $R_2$ | $(1+a_v)R_1+R_2=0$, no $s$ | none |
| $R$ | $1/sC$ | $(1+a_v)R+1/(sC)=0$ | $s=-1/[(1+a_v)RC]<0$ |
| $1/sC$ | $R$ | $(1+a_v)/(sC)+R=0$ | $s=-(1+a_v)/(RC)<0$ |
| $1/sC_1$ | $1/sC_2$ | $[(1+a_v)/C_1+1/C_2]/s=0$ | no finite pole; $\mathscr{R}=a_vC_2/(C_1+C_2)$ is constant |

Every pole that exists lies on the negative real axis, so the circuit is stable in all four cases.

### Step 4 — General argument

The same result follows without listing cases. The pole condition is $Z_2/Z_1=-(1+a_v)$, a negative real number. For resistors and capacitors, $Z_2/Z_1$ has one of the forms $k$, $ks$ or $k/s$ with $k>0$:

- $k=-(1+a_v)$ is impossible;
- $ks=-(1+a_v)$ and $k/s=-(1+a_v)$ both give $s<0$.

Equivalently, on the $j\omega$ axis $Z_2/Z_1$ is either positive real or purely imaginary, so $1+Z_2/Z_1$ has a positive real part. Hence $\mathscr{R}(j\omega)=a_v/(1+Z_2/Z_1)$ stays in the right half-plane, and its Nyquist plot can never encircle $-1$.
