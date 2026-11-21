# Detailed solution - A537

An error in the first-stage DAC reference does not move the stage-1 decisions, which use the ideal ADC, but it subtracts the wrong amount from the input. The residue is then off by an amount proportional to the subrange index, and every stage-2 transition in that subrange moves by the same amount. Find the largest shift, in the top subrange, and limit it to half an LSB.

### Step 1 — Residue with the DAC error

Stage 1 is ideal, so subrange $m=b_0b_1=0,\dots,3$ covers $mV_{REF}/4$ to $(m+1)V_{REF}/4$. The DAC outputs

$$
v_{out}(1)=\frac m4\left(V_{REF}\pm\Delta V_{REF}\right)
$$

instead of $mV_{REF}/4$, so the residue passed to stage 2 is

$$
v_{in}(2)=v_{in}(1)-\frac{mV_{REF}}4\mp\frac{m\,\Delta V_{REF}}4 ,
$$

too small (or too large) by $m\Delta V_{REF}/4$.

### Step 2 — Shift of the transitions

Stage 2 switches when $v_{in}(2)$ reaches $V_{REF}/16$, $V_{REF}/8$, $3V_{REF}/16$. Because the residue is offset by $\mp m\Delta V_{REF}/4$, the input at which each of these three transitions (to codes $4m+1$, $4m+2$, $4m+3$) occurs moves by

$$
\Delta v_{in}(1)=\pm\frac{m\,\Delta V_{REF}}4 .
$$

The stage-1 transitions are unaffected. The shift is zero for $m=0$ and largest for $m=3$:

$$
\Delta v_{in,max}=\frac{3\,\Delta V_{REF}}4=\frac{3\,\Delta V_{REF}/4}{V_{REF}/16}\ \text{LSB}=12\,\frac{\Delta V_{REF}}{V_{REF}}\ \text{LSB}.
$$

### Step 3 — INL limit

Requiring every transition within $\pm0.5$ LSB of its ideal position:

$$
12\,\frac{|\Delta V_{REF}|}{V_{REF}}\le0.5
\;\Longrightarrow\;
|\Delta V_{REF}|\le\frac{V_{REF}}{24}\approx0.0417\,V_{REF}.
$$

Equivalently, $3\Delta V_{REF}/4\le V_{REF}/32$. The full DAC error $\Delta V_{REF}$ never appears at the output, because at most three quarters of it is subtracted (in the top subrange).
