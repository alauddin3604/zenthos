<?php

namespace Tests\Unit;

use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;

class UnitExampleTest extends TestCase
{
    #[Test]
    public function basic_test(): void
    {
        $sum = 1 + 1;

        $this->assertEquals(2, $sum);
    }
}
