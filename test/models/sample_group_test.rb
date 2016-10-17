require 'test_helper'

class SampleGroupTest < ActiveSupport::TestCase
  def setup
    @sample_group = sample_groups(:blood)
  end

  should validate_presence_of(:name)
  should validate_length_of(:name).is_at_most(NAME_MAX_LENGTH)
  should validate_presence_of(:color)
  should validate_length_of(:color).is_at_most(COLOR_MAX_LENGTH)
  should validate_presence_of(:organization)

  test "should validate with correct data" do
    assert @sample_group.valid?
  end

  test "should not validate without organization" do
    @sample_group.organization = nil
    assert_not @sample_group.valid?
  end
end
