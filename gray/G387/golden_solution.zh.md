$A_{dm} \approx -0.985$，$A_{cm} \approx -0.0025$。

运放增益（$g_{m1} = 1$ mA/V，$r_{o1} = 200$ kΩ，$r_{o3} = 400$ kΩ，$r_{o5h} = 200$ kΩ，$g_{m5h} = 1$ mA/V）：
- $a_{dm} = -g_{m1}(r_{o1}\|r_{o3}) = -133$。
- 开环共模增益 $a_{cm} \approx -(R_{o(\text{down})}\|r_{o3})/r_{o5h} \approx -396\ \text{k}/200\ \text{k} = -1.98$；CMC 增益 $a_{cmc} = -g_{m5h}(R_{o(\text{down})}\|r_{o3}) \approx -396$。
- 共模反馈环路闭合后：$a'_{cm} = a_{cm}/[1 + a_{cms}(-a_{cmc})] = -1.98/397 \approx -0.0050$。

闭环（100-MΩ 电阻不对输出构成负载，因为输出电阻只有几百 kΩ；输入端不取电流，因此 $v_{id} = (v_{sd} + v_{od})/2$，$v_{ic} = (v_{sc} + v_{oc})/2$）：
- $A_{dm} = -\dfrac{R_3}{R_1}\cdot\dfrac{T_{dm}}{1 + T_{dm}}$，其中 $T_{dm} = (-a_{dm})R_1/(R_1 + R_3) = 66.7$：$A_{dm} = -66.7/67.7 = -0.985$。
- $A_{cm} = -\dfrac{R_3}{R_1}\cdot\dfrac{T_{cm}}{1 + T_{cm}}$，其中 $T_{cm} = (-a'_{cm})/2 = 0.0025$：$A_{cm} \approx -0.0025$。
