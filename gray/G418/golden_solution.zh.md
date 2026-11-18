$a'_{cm} \approx +0.017$。

器件参数：$r_{o2} = 20.5/100\ \mu\text{A} = 205$ kΩ，$r_{o4} = 41/100\ \mu\text{A} = 410$ kΩ，$r_{o5h} = 2(20.5/200\ \mu\text{A}) = 205$ kΩ，$g_{m5h} = g_{m5}/2 = (2 \times 200\ \mu\text{A}/0.5\ \text{V})/2 = 0.4$ mA/V，$r_{o6}\|r_{o7} = 102.5\|51.3 = 34.2$ kΩ，第二级增益 $g_{m6}(r_{o6}\|r_{o7}) = 53$。
- 开环共模增益（CMFB 断开），共模半边电路（half circuit）：$M_2$ 带有 $r_{o5h}$ 的源极负反馈（source degeneration），$G_m = g_{m2}/(1 + g_{m2}r_{o5h}) \approx 4.85\ \mu$A/V；第一级负载 $r_{o4}\|(g_{m2}r_{o2}r_{o5h}) \approx 410\ \text{k}\|42\ \text{M} \approx 406$ kΩ。增益 ≈ 1.97，再乘以 53（两次反相）：$a_{cm} \approx +104$。
- CMC 增益：$a_{cmc0} = g_{m5h}(406\ \text{k})(53) \approx +8600$。
- 环路增益（loop gain）$T = a_{cms0}(-a_{cmc0}) = (-0.71)(-8600) \approx 6100$。
- $a'_{cm} = a_{cm}/(1 + T) \approx 104/6108 \approx 0.017$。简洁形式：$a'_{cm} \approx 1/(g_{m5h}r_{o5h}|a_{cms0}|) = 1/(82 \times 0.71) \approx 0.017$。因此 CMFB 环路使共模增益降低了 $1 + T \approx 6100$ 倍。
