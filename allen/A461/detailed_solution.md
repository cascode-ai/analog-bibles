# Detailed solution - A461

Express every output level in LSBs of the 4-bit DAC as an MSB part plus the divided LSB part. The INL (output minus ideal) and the DNL (step minus 1 LSB) then follow from two kinds of steps: those inside a group of four codes and those at a group transition.

### Step 1 — Output, INL and step sizes for a divisor $d$

With $1\,\mathrm{LSB}=V_{REF}/16$ and the code written as $k=4m+n$ ($m=2b_0+b_1$, $n=2b_2+b_3$, each 0–3), the MSB subDAC gives $(m/4)V_{REF}=4m$ LSB and the LSB subDAC gives $(n/4)V_{REF}=4n$ LSB before division:

$$
v_{OUT}=4m+\frac{4n}{d}\ \mathrm{LSB},\qquad
\mathrm{INL}=v_{OUT}-(4m+n)=\left(\frac4d-1\right)n\ \mathrm{LSB}.
$$

$$
\text{step inside a group}=\frac4d\ \mathrm{LSB},\qquad
\text{step at a group transition }(n=3\to0)=4-\frac{12}{d}\ \mathrm{LSB}.
$$

### Step 2 — Divisor $d=3$

$$
\mathrm{INL}=+\frac n3=0,\ \tfrac13,\ \tfrac23,\ 1\ \mathrm{LSB};\qquad
\text{steps: }\tfrac43\ \mathrm{LSB}\ \left(\mathrm{DNL}=+\tfrac13\right),\quad 4-4=0\ \mathrm{LSB}\ (\mathrm{DNL}=-1).
$$

The output levels are 0, 4/3, 8/3, 4 │ 4, 16/3, 20/3, 8 │ 8, … │ 12, …, 16 LSB. Hence $+\mathrm{INL}=+1$ LSB, $-\mathrm{INL}=0$ LSB, $+\mathrm{DNL}=+1/3$ LSB $\approx0.33$ LSB, $-\mathrm{DNL}=-1$ LSB.

At $0011\to0100$, $0111\to1000$ and $1011\to1100$ the step is exactly zero: two adjacent codes give the same output. The output never decreases, so the DAC is monotonic in the non-decreasing sense, but it sits exactly at the limit (DNL $=-1$ LSB) and is not strictly monotonic; any further error in the same direction would make it nonmonotonic.

### Step 3 — Divisor $d=5$

$$
\mathrm{INL}=-0.2\,n=0,\ -0.2,\ -0.4,\ -0.6\ \mathrm{LSB};\qquad
\text{steps: }0.8\ \mathrm{LSB}\ (\mathrm{DNL}=-0.2),\quad 4-2.4=1.6\ \mathrm{LSB}\ (\mathrm{DNL}=+0.6).
$$

Hence $+\mathrm{INL}=0$ LSB, $-\mathrm{INL}=-0.6$ LSB, $+\mathrm{DNL}=+0.6$ LSB, $-\mathrm{DNL}=-0.2$ LSB. Every step is positive, so the DAC is **monotonic**.
