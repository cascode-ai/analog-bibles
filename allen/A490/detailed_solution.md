# Detailed solution - A490

With all bits equal, the pipeline output is a geometric series in $0.5z^{-1}$; summing it gives a first-order recursive transfer function, which is a feedback loop rather than a chain of stages. Reading that transfer function as a difference equation identifies the blocks of [Fig. 2], and the same equation shows what initial condition is needed.

### Step 1 — Geometric series

Put $b_i=b$ for all $i$:

$$
V_{out}(z)=bV_{REF}z^{-1}\left[1+0.5z^{-1}+(0.5z^{-1})^2+\cdots+(0.5z^{-1})^{N-1}\right]
=bV_{REF}z^{-1}\,\frac{1-(0.5z^{-1})^N}{1-0.5z^{-1}} .
$$

The term $(0.5z^{-1})^N$ carries the weight $2^{-N}$, below the resolution of an $N$-bit converter, and it vanishes as $N$ grows, so

$$
V_{out}(z)=\frac{b\,z^{-1}V_{REF}}{1-0.5z^{-1}} .
$$

### Step 2 — Difference equation and the iterative structure

Multiplying out, $V_{out}(z)\left(1-0.5z^{-1}\right)=b\,z^{-1}V_{REF}$, i.e.

$$
v_{out}(n)=b(n-1)\,V_{REF}+0.5\,v_{out}(n-1).
$$

In each period the current bit's $\pm V_{REF}$ (switch $A$ for 1, switch $B$ for 0) is added to one-half of the previous output, and the sum is held for one period. This is exactly [Fig. 2]: the summer adds $\pm V_{REF}$ and the fed-back value, the sample-and-hold provides the delay $z^{-1}$, and the amplifier of gain ½ in the feedback path provides the factor $0.5$. Note that the closed form only motivates the loop; the loop itself is exact for arbitrary bits, since applying $b_{N-1},\dots,b_0$ serially (LSB first) starting from $v_{out}=0$ gives after $N$ periods

$$
v_{out}=\left(b_0+\tfrac12b_1+\tfrac14b_2+\cdots+2^{-(N-1)}b_{N-1}\right)V_{REF},
$$

the same final value as the pipeline.

### Step 3 — Initial zeroing

The recursion produces the correct result only if $v_{out}=0$ before the LSB period; otherwise a leftover value $v_0$ is halved $N$ times and adds the error $v_0/2^{N}$ to the result. Zeroing can be done in either of two ways in [Fig. 2]:

- add a reset switch across the hold capacitor of the sample-and-hold (or from its output to ground), closed for one period before each conversion;
- or, for one period, open both $A$ and $B$ and open the feedback path (a switch in series with the ½ amplifier, or a switch grounding that summer input), so that the summer output is 0 and the sample-and-hold acquires 0 V; then close the loop and start with the LSB.
