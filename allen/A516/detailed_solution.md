# Detailed solution - A516

The first-stage gain error shifts node $v(1)$ by an amount proportional to $\varepsilon$, and each later ideal stage doubles the shift. While no bit changes, every node voltage is linear in $\varepsilon$; the first error occurs when the node nearest to zero, after amplification, crosses zero. Find the ideal node voltages, express them in $\varepsilon$, and pick the zero crossing of smallest $|\varepsilon|$.

### Step 1 — Ideal node voltages and bits

In [Fig. 1] each stage forms $v(i+1)=2v(i)-b_iV_{REF}$ (the first with $2(1+\varepsilon)$), and comparator $i$ gives $b_i=+1$ if $v(i)>0$ and $-1$ otherwise. In units of $V_{REF}$, with $v(0)=0.6$:

| Node | Voltage | Bit |
|---|---|---|
| $v(0)$ | 0.6 | $b_0=+1$ |
| $v(1)$ | $1.2-1=0.2$ | $b_1=+1$ |
| $v(2)$ | $0.4-1=-0.6$ | $b_2=-1$ |
| $v(3)$ | $-1.2+1=-0.2$ | $b_3=-1$ |
| $v(4)$ | $-0.4+1=0.6$ | $b_4=+1$ |

The ideal word is 11001.

### Step 2 — Node voltages with the gain error

$b_0$ depends on $v(0)$ alone and is unaffected. The first stage gives

$$
v(1)=2(1+\varepsilon)(0.6)-1=0.2+1.2\varepsilon ,
$$

and, while the later bits keep their ideal values, each ideal stage doubles the error term:

$$
v(2)=-0.6+2.4\varepsilon,\qquad
v(3)=-0.2+4.8\varepsilon,\qquad
v(4)=0.6+9.6\varepsilon .
$$

### Step 3 — First bit to change

| Node | Zero crossing at $\varepsilon$ | Bit affected |
|---|---|---|
| $v(1)=0.2+1.2\varepsilon$ | $-0.2/1.2=-0.167$ | $b_1$ |
| $v(2)=-0.6+2.4\varepsilon$ | $+0.6/2.4=+0.25$ | $b_2$ |
| $v(3)=-0.2+4.8\varepsilon$ | $+0.2/4.8=+0.0417$ | $b_3$ |
| $v(4)=0.6+9.6\varepsilon$ | $-0.6/9.6=-0.0625$ | $b_4$ |

The smallest magnitude is

$$
|\varepsilon|_{min}=\frac{0.2}{4.8}=0.0417,\qquad \varepsilon=+0.0417\ \ (\text{first-stage gain }2.083),
$$

at which $v(3)$ reaches zero and $b_3$, the 4th bit, becomes wrong. For negative $\varepsilon$ the first error needs $\varepsilon=-0.0625$, where $b_4$ changes. The critical node is $v(3)$: it is only $0.2V_{REF}$ from the threshold, and its error coefficient, $1.2\times2^2=4.8$, is already large.
