$V_{\text{out}} = -\dfrac{10\,V_{\text{in}}}{V_{\text{ref}}}$（单位 V）：该电路是一个模拟除法器（analog divider），且只在 $V_{\text{ref}} > 0$ 时才能正常工作。

- 运放的同相输入端接地，反相输入端为虚地（virtual ground），因此 $V_{\text{in}}/R + Z/R = 0$，即 $Z = -V_{\text{in}}$。
- 乘法器的 $X = V_{\text{out}}$，$Y = V_{\text{ref}}$：$Z = 0.1V_{\text{out}}V_{\text{ref}}$。因此 $0.1V_{\text{out}}V_{\text{ref}} = -V_{\text{in}}$。
- 对于固定的 $V_{\text{ref}}$，特性是一条过原点、斜率为 $-10/V_{\text{ref}}$ 的直线（例如 $V_{\text{ref}} = 10$ V 时斜率为 −1，$V_{\text{ref}} = 1$ V 时为 −10）。
- 反馈极性：经过乘法器的环路增益为 $0.1V_{\text{ref}}$，并返回到反相输入端。只有当 $V_{\text{ref}} > 0$ 时才是负反馈。$V_{\text{ref}} < 0$ 时为正反馈，输出锁定在电源限幅值上；当 $V_{\text{ref}} \to 0$ 时增益无界，输出饱和。在通常的 ±10 V 信号范围下，要使 $|V_{\text{out}}| \le 10$ V，需要 $|V_{\text{in}}| \le V_{\text{ref}}$。
