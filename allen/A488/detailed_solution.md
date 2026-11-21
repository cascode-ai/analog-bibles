# Detailed solution - A488

Follow the signal through the chain of summers and attenuators to get each bit's weight as a product of the $k$'s, list the eight output levels against the ideal ones, plot both characteristics, and read the INL and DNL from the levels and steps.

### Step 1 — Output expression

Bit $b_2$ enters before $k_2$, $b_1$ before $k_1$ and $b_0$ before $k_0$, and each summer adds with gain +1:

$$
v_{OUT}=k_0\left[b_0V_{REF}+k_1\left(b_1V_{REF}+k_2\,b_2V_{REF}\right)\right]
=\left(k_0b_0+k_0k_1b_1+k_0k_1k_2b_2\right)V_{REF}.
$$

With $k_0=7/16$, $k_1=5/7$, $k_2=3/5$: $k_0k_1=5/16$ and $k_0k_1k_2=3/16$, so

$$
v_{OUT}=\left(\frac{7}{16}b_0+\frac{5}{16}b_1+\frac{3}{16}b_2\right)V_{REF}.
$$

The ideal DAC ($k_i=1/2$) gives $v_{OUT}=(b_0/2+b_1/4+b_2/8)V_{REF}$, with $1\,\mathrm{LSB}=V_{REF}/8=2/16\,V_{REF}$.

### Step 2 — Output levels, INL and steps

| Code $b_0b_1b_2$ | 000 | 001 | 010 | 011 | 100 | 101 | 110 | 111 |
|---|---|---|---|---|---|---|---|---|
| Actual ($V_{REF}/16$) | 0 | 3 | 5 | 8 | 7 | 10 | 12 | 15 |
| Ideal ($V_{REF}/16$) | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 |
| INL (LSB) | 0 | +0.5 | +0.5 | +1 | −0.5 | 0 | 0 | +0.5 |

The steps between adjacent codes, in LSB, are $1.5,\ 1,\ 1.5,\ -0.5,\ 1.5,\ 1,\ 1.5$, so the DNL values are $+0.5,\ 0,\ +0.5,\ -1.5,\ +0.5,\ 0,\ +0.5$ LSB. For example, at $011\to100$ the step is $(7-8)/16\,V_{REF}=-0.5$ LSB, i.e. $\mathrm{DNL}=-0.5-1=-1.5$ LSB.

### Step 3 — Characteristic

![Actual and ideal output of the 3-bit pipeline DAC versus input code, showing the drop at 011 to 100](/q/A488/solution-curves.svg)

The plot shows $v_{OUT}/V_{REF}$ at each of the eight codes for the given attenuators (solid) and for the ideal $k_i=1/2$ (dashed). The actual staircase lies on or above the ideal one except at code 100, where it dips below, and its steps are unequal.

### Step 4 — INL, DNL and monotonicity

$$
+\mathrm{INL}=+1\ \mathrm{LSB}\ (\text{code }011),\qquad -\mathrm{INL}=-0.5\ \mathrm{LSB}\ (\text{code }100),
$$
$$
+\mathrm{DNL}=+0.5\ \mathrm{LSB},\qquad -\mathrm{DNL}=-1.5\ \mathrm{LSB}\ (011\to100).
$$

The output falls from $8/16\,V_{REF}$ to $7/16\,V_{REF}$ when the code increases from 011 to 100, so the DAC is **not monotonic**, consistent with a DNL below $-1$ LSB.
