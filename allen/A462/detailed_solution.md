# Detailed solution - A462

Scale each subDAC's output by its actual reference, express all levels in LSBs of the ideal 4-bit DAC, and read the INL and DNL from the error per code and from the two kinds of steps (inside a group and at a group transition).

### Step 1 — Actual and ideal output

With $1\,\mathrm{LSB}=V_{REF}/16$ and the code $k=4m+n$ ($m=2b_0+b_1$, $n=2b_2+b_3$, each 0–3):

- MSB subDAC with reference $0.75V_{REF}$: $(m/4)(0.75V_{REF})=0.75(4m)=3m$ LSB.
- LSB subDAC with reference $1.25V_{REF}$, divided by 4: $(n/4)(1.25V_{REF})/4=1.25n$ LSB.

$$
v_{OUT}=3m+1.25n\ \mathrm{LSB},\qquad v_{OUT,ideal}=4m+n\ \mathrm{LSB}.
$$

### Step 2 — INL

$$
\mathrm{INL}=v_{OUT}-v_{OUT,ideal}=-m+0.25\,n\ \mathrm{LSB}.
$$

It is largest for $m=0$, $n=3$ (code 0011): $+0.75$ LSB, and smallest for $m=3$, $n=0$ (code 1100): $-3$ LSB. So $+\mathrm{INL}=+0.75$ LSB and $-\mathrm{INL}=-3$ LSB.

### Step 3 — DNL

$$
\begin{aligned}
\text{inside a group }(n\to n+1):&\quad 1.25\ \mathrm{LSB},\quad \mathrm{DNL}=+0.25\ \mathrm{LSB},\\
\text{group transition }(n=3\to0,\ m\to m+1):&\quad 3-3(1.25)=-0.75\ \mathrm{LSB},\quad \mathrm{DNL}=-1.75\ \mathrm{LSB}.
\end{aligned}
$$

So $+\mathrm{DNL}=+0.25$ LSB and $-\mathrm{DNL}=-1.75$ LSB.

### Step 4 — Monotonicity

The output falls by 0.75 LSB at $0011\to0100$, $0111\to1000$ and $1011\to1100$ (for example 3.75 LSB at 0011 and 3 LSB at 0100). A negative step means the DAC is **not monotonic**, consistent with $-\mathrm{DNL}<-1$ LSB.
