# Golden Solution - A446

## Reference answer

With $C_i = 2^{N-1-i}C$ and $D = \sum_{i=0}^{N-1} b_i C_i/(2^N C) = \sum_{i=0}^{N-1} b_i 2^{-(i+1)}$:

- $b_0 = 1$: $v_{OUT} = -\dfrac{\sum b_i C_i}{2^N C}V_{REF} = -\left(\dfrac{1}{2} + \sum_{i=1}^{N-1}\dfrac{b_i}{2^{i+1}}\right)V_{REF}$.
- $b_0 = 0$: $v_{OUT} = +\dfrac{\sum_{i\ge1} b_i C_i}{2^N C}V_{REF} = +\sum_{i=1}^{N-1}\dfrac{b_i}{2^{i+1}}V_{REF}$.
- Compactly $v_{OUT} = (1 - 2b_0)\,D\,V_{REF}$: $b_0$ sets the polarity (and its capacitor adds the 1/2 term when it is 1).

Operation: in φ1 the op amp is a follower (inverting input tied to the output) and the right plate of the $2^NC$ feedback capacitor is grounded; the bottom plates of the capacitors whose bits are 1 sit on the common line, which is at ground if $b_0 = 1$ and at $V_{REF}$ if $b_0 = 0$ (bits that are 0 stay grounded). In φ2 the common line switches to $V_{REF}$ ($b_0 = 1$) or to ground ($b_0 = 0$), and the charge $\pm V_{REF}\sum b_iC_i$ is transferred to $2^NC$.

Offset $V_{OS}$: the expression does not change. In φ1 the follower holds the summing node at $V_{OS}$, and in φ2 the virtual ground is again at $V_{OS}$; charge conservation on that node, $\sum C_i(V_{OS} - V_{b,i}^{\phi1}) + 2^NC\,V_{OS} = \sum C_i(V_{OS} - V_{b,i}^{\phi2}) + 2^NC(V_{OS} - v_{OUT})$, gives $v_{OUT} = -\sum C_i(V_{b,i}^{\phi2} - V_{b,i}^{\phi1})/2^NC$ with $V_{OS}$ cancelled. The circuit auto-zeroes the offset, so to first order it causes neither an offset nor a gain error (only second-order residues from finite gain and switch charge injection remain).

## Grading notes

Credit: about 60 % for the output expression, 40 % for the offset analysis.
+2: correct output with the polarity set by $b_0$ (negative and including the 1/2 term for $b_0 = 1$, positive for $b_0 = 0$) and the conclusion, with the charge argument, that $V_{OS}$ cancels because the summing node is at $V_{OS}$ in both phases. +1: correct expression and offset cancellation with a weak justification, or a minor slip in the weights. 0: correct expression but the offset part wrong, e.g. "$-(V_{REF} - V_{OS})\sum\ldots$, a gain error" or "an output offset $V_{OS}$". −2 (asserted as fact): a single-polarity expression ignoring the role of $b_0$, weights reversed (C as the MSB), or the feedback capacitor read as $C$ instead of $2^NC$.
