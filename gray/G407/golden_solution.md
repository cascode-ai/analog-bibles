# Golden Solution - G407

## Reference answer

$V_{od}(t) = -1.0\sin(100t)$ V, $V_{oc}(t) = 0$, $V_{o1}(t) = -0.5\sin(100t)$ V, $V_{o2}(t) = +0.5\sin(100t)$ V.
$V_{i1}(t) = V_{i2}(t) = 0.0833\sin(100t)$ V (= $\tfrac{1}{12}$ V·sin), $V_{id}(t) = 0$, $V_{ic}(t) = 0.0833\sin(100t)$ V.

- $V_{sd} = 0.2\sin(100t)$, $V_{sc} = 0.1\sin(100t)$. $V_{od} = -(R_3/R_1)V_{sd} = -1.0\sin(100t)$; with $V_{oc} = 0$, $V_{o1} = V_{od}/2$, $V_{o2} = -V_{od}/2$.
- $a_{dm} \to -\infty$ gives $V_{i1} = V_{i2} = V_i$; KCL at the top input: $(V_{s1} - V_i)/R_1 = (V_i - V_{o1})/R_3$ → $V_i = (5V_{s1} + V_{o1})/6 = (1.0 - 0.5)\sin(100t)/6 = 0.0833\sin(100t)$ V. Check at the bottom input: $(0 - V_i)/1\ \text{k} = (V_i - 0.5\sin)/5\ \text{k}$ ✓.
- So the op-amp inputs carry a CM signal of 83.3 mV amplitude (the input CM is not held at zero), while $V_{id} = 0$.

## Grading notes

Credit split about equally between the outputs and the inputs. +2: all eight waveforms right (amplitudes within ±2%, correct signs). +1: outputs right and inputs right in amplitude but one sign wrong, or vice versa. 0: outputs right, inputs wrong (e.g. $V_{i1} = V_{i2} = 0$ claimed as a virtual ground), or the reverse. −2 (asserted as fact): $V_{od}$ amplitude 0.5 V or 2 V, $V_{o1} = -1.0\sin$ with $V_{o2} = 0$ (single-ended output assumed despite $V_{OC} = 0$), or both outputs and inputs wrong.
